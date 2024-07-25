export function* getToken() {
    const token = localStorage.getItem('access');

    const url = `https://studapi.teachmeskills.by/auth/jwt/verify/`;
    const response: Response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    });
    
    if(response.status === 200){
        return token;
    }else {
        const refresh = localStorage.getItem('refresh');

        const url = `https://studapi.teachmeskills.by/auth/jwt/refresh/`;
        const response: Response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${refresh}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh }),
        });

        if(response.status === 200){
            const { access } = yield response.json();
            return access;
        }
    }

    return ''
}
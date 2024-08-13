function Logout() {
    if (localStorage.getItem('customer_login')) {
        localStorage.removeItem('customer_login');
    }
    if (localStorage.getItem('customer')) {
        localStorage.removeItem('customer');
    }
    window.location.href = '/';
}

export default Logout;
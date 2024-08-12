function Logout() {
    console.log("Logging out...");
    if (localStorage.getItem('customer_login')) {
        localStorage.removeItem('customer_login');
    }
    window.location.href = '/';
}

export default Logout;
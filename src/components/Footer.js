
import React from 'react';


function Footer() {


    return (

        <footer class="text-center text-lg-start bg-body-tertiary text-muted mt-5 border">

            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a
                        data-mdb-ripple-init
                        class="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="#!"
                        role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        class="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        class="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        href="#!"
                        role="button"
                    ><i class="fab fa-google"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        class="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="#!"
                        role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        class="btn text-white btn-floating m-1"
                        style={{ backgroundColor: " #0082ca" }}
                        href="#!"
                        role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Ecommerce-Shop
                            </h6>
                            <p>
                                Ecommerce-Shop is a leading online shopping platform that offers a wide range of products at competitive prices. Our platform is user-friendly, secure, and reliable. Shop with us today!
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Books</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Bike</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Car</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Shirt</a>
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3 text-primary"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>

                © 2024 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Ecommerce-Shop.com</a>
            </div>
        </footer >
    );
}

export default Footer;
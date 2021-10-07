/* eslint-disable jsx-a11y/anchor-is-valid */
import { BlackButton } from "../components/Button"
import PageHeader from "../components/PageHeader"

const ContactUs = () => {
    return (
        <main className="container-contactus">
            <div className="content">
                <PageHeader text="Leave a Message." />

                <div className="page-details">
                    <h3 className="text-blue text-regular text-small">Please leave us a message by filling the form below. Average response time is 1 hour. For urgent enquiries, use the live chat or call <a href="tel:+2347060502770">+2347060502770.</a></h3>
                </div>

                <form action="#" className="contact-form">
                    <input className="form-input" type="text" name="name" id="name" placeholder="What's your name?" required/>
                    <input className="form-input" type="email" name="email" id="email" placeholder="Drop your Email" required/>
                    <input className="form-input" type="text" name="message-subject" id="message-subject" placeholder="Message Subject" required/>
                    <textarea className="form-input form-textarea" name="message" id="message" placeholder="Type your message here in details..." style={{resize: 'none'}} required>
                    </textarea>

                    <div className="links">
                        <div className="buttons">
                            <div className="recaptcha-box"></div>
                            <BlackButton text='Submit' />
                        </div>
                        <div className="social-media">
                            <a href="#">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="61" rx="20" fill="#2A679E"/>
                                    <path d="M29.406 25.801V27.621H25.22V30.204H28.706V32.031H25.22V36H22.84V25.801H29.406ZM30.633 36V25.801H34.385C35.0896 25.801 35.6893 25.8663 36.184 25.997C36.6786 26.1277 37.0823 26.312 37.395 26.55C37.7076 26.788 37.934 27.0773 38.074 27.418C38.2186 27.7587 38.291 28.139 38.291 28.559C38.291 28.7877 38.2583 29.0093 38.193 29.224C38.1276 29.434 38.025 29.6323 37.885 29.819C37.745 30.0057 37.5653 30.176 37.346 30.33C37.1266 30.4793 36.863 30.61 36.555 30.722C37.227 30.8853 37.724 31.1513 38.046 31.52C38.368 31.884 38.529 32.353 38.529 32.927C38.529 33.361 38.445 33.7647 38.277 34.138C38.109 34.5113 37.8616 34.838 37.535 35.118C37.213 35.3933 36.814 35.6103 36.338 35.769C35.862 35.923 35.3183 36 34.707 36H30.633ZM32.999 31.674V34.215H34.665C34.9776 34.215 35.232 34.1753 35.428 34.096C35.6286 34.0167 35.785 33.914 35.897 33.788C36.009 33.662 36.086 33.5197 36.128 33.361C36.17 33.2023 36.191 33.0413 36.191 32.878C36.191 32.6913 36.1653 32.5233 36.114 32.374C36.0673 32.2247 35.9833 32.0987 35.862 31.996C35.7453 31.8933 35.589 31.814 35.393 31.758C35.197 31.702 34.9496 31.674 34.651 31.674H32.999ZM32.999 30.092H34.231C34.4923 30.092 34.728 30.0733 34.938 30.036C35.148 29.9987 35.3253 29.9333 35.47 29.84C35.6193 29.7467 35.7313 29.6183 35.806 29.455C35.8853 29.2917 35.925 29.0863 35.925 28.839C35.925 28.5963 35.8946 28.3957 35.834 28.237C35.7733 28.0737 35.68 27.943 35.554 27.845C35.428 27.747 35.267 27.677 35.071 27.635C34.8796 27.593 34.651 27.572 34.385 27.572H32.999V30.092Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="61" rx="20" fill="black"/>
                                    <path d="M26.43 36H24.05V25.801H26.43V36ZM33.1264 34.292C33.453 34.292 33.7424 34.264 33.9944 34.208C34.2464 34.152 34.4844 34.0773 34.7084 33.984V32.437H33.7004C33.551 32.437 33.4344 32.3973 33.3504 32.318C33.2664 32.2387 33.2244 32.1383 33.2244 32.017V30.715H36.8504V35.02C36.589 35.2113 36.316 35.377 36.0314 35.517C35.7514 35.6523 35.4504 35.7643 35.1284 35.853C34.811 35.9417 34.4704 36.007 34.1064 36.049C33.747 36.091 33.3597 36.112 32.9444 36.112C32.1977 36.112 31.507 35.9813 30.8724 35.72C30.2377 35.454 29.687 35.09 29.2204 34.628C28.7584 34.1613 28.3944 33.6107 28.1284 32.976C27.867 32.3367 27.7364 31.6437 27.7364 30.897C27.7364 30.1363 27.8624 29.4387 28.1144 28.804C28.3664 28.1647 28.7257 27.614 29.1924 27.152C29.6637 26.69 30.2307 26.3307 30.8934 26.074C31.5607 25.8173 32.305 25.689 33.1264 25.689C33.551 25.689 33.95 25.724 34.3234 25.794C34.6967 25.864 35.0397 25.9597 35.3524 26.081C35.6697 26.2023 35.959 26.347 36.2204 26.515C36.4817 26.683 36.715 26.865 36.9204 27.061L36.2344 28.104C36.169 28.202 36.0897 28.279 35.9964 28.335C35.9077 28.391 35.8097 28.419 35.7024 28.419C35.5624 28.419 35.4177 28.3723 35.2684 28.279C35.0817 28.167 34.9044 28.0713 34.7364 27.992C34.573 27.908 34.405 27.8403 34.2324 27.789C34.0597 27.7377 33.8777 27.7003 33.6864 27.677C33.495 27.6537 33.2804 27.642 33.0424 27.642C32.599 27.642 32.2 27.7213 31.8454 27.88C31.4907 28.034 31.1874 28.2533 30.9354 28.538C30.688 28.8227 30.4967 29.1657 30.3614 29.567C30.226 29.9637 30.1584 30.407 30.1584 30.897C30.1584 31.4383 30.233 31.919 30.3824 32.339C30.5317 32.759 30.737 33.1137 30.9984 33.403C31.2644 33.6923 31.577 33.914 31.9364 34.068C32.3004 34.2173 32.697 34.292 33.1264 34.292Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="61" rx="20" fill="#69C2E8"/>
                                    <path d="M27.246 25.801V27.677H24.376V36H22.01V27.677H19.14V25.801H27.246ZM27.4509 25.801H29.4389C29.6442 25.801 29.8145 25.8477 29.9499 25.941C30.0899 26.0343 30.1809 26.158 30.2229 26.312L31.6229 31.632C31.6695 31.8047 31.7162 31.989 31.7629 32.185C31.8095 32.381 31.8445 32.5863 31.8679 32.801C31.9145 32.5817 31.9659 32.3763 32.0219 32.185C32.0779 31.989 32.1315 31.8047 32.1829 31.632L33.8349 26.312C33.8769 26.1813 33.9655 26.0647 34.1009 25.962C34.2409 25.8547 34.4089 25.801 34.6049 25.801H35.3049C35.5102 25.801 35.6782 25.8477 35.8089 25.941C35.9442 26.0297 36.0375 26.1533 36.0889 26.312L37.7269 31.632C37.7782 31.7953 37.8319 31.9703 37.8879 32.157C37.9439 32.339 37.9929 32.535 38.0349 32.745C38.0722 32.5397 38.1095 32.3437 38.1469 32.157C38.1889 31.9703 38.2309 31.7953 38.2729 31.632L39.6729 26.312C39.7102 26.1767 39.7989 26.0577 39.9389 25.955C40.0789 25.8523 40.2469 25.801 40.4429 25.801H42.3049L39.1549 36H37.0129L35.0949 29.679C35.0622 29.581 35.0272 29.4737 34.9899 29.357C34.9572 29.2403 34.9245 29.1167 34.8919 28.986C34.8592 29.1167 34.8242 29.2403 34.7869 29.357C34.7542 29.4737 34.7215 29.581 34.6889 29.679L32.7429 36H30.6009L27.4509 25.801Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="61" rx="20" fill="#03D07D"/>
                                    <path d="M18.07 25.801H20.058C20.2633 25.801 20.4337 25.8477 20.569 25.941C20.709 26.0343 20.8 26.158 20.842 26.312L22.242 31.632C22.2887 31.8047 22.3353 31.989 22.382 32.185C22.4287 32.381 22.4637 32.5863 22.487 32.801C22.5337 32.5817 22.585 32.3763 22.641 32.185C22.697 31.989 22.7507 31.8047 22.802 31.632L24.454 26.312C24.496 26.1813 24.5847 26.0647 24.72 25.962C24.86 25.8547 25.028 25.801 25.224 25.801H25.924C26.1293 25.801 26.2973 25.8477 26.428 25.941C26.5633 26.0297 26.6567 26.1533 26.708 26.312L28.346 31.632C28.3973 31.7953 28.451 31.9703 28.507 32.157C28.563 32.339 28.612 32.535 28.654 32.745C28.6913 32.5397 28.7287 32.3437 28.766 32.157C28.808 31.9703 28.85 31.7953 28.892 31.632L30.292 26.312C30.3293 26.1767 30.418 26.0577 30.558 25.955C30.698 25.8523 30.866 25.801 31.062 25.801H32.924L29.774 36H27.632L25.714 29.679C25.6813 29.581 25.6463 29.4737 25.609 29.357C25.5763 29.2403 25.5437 29.1167 25.511 28.986C25.4783 29.1167 25.4433 29.2403 25.406 29.357C25.3733 29.4737 25.3407 29.581 25.308 29.679L23.362 36H21.22L18.07 25.801ZM42.3457 36H40.5117C40.3063 36 40.136 35.9533 40.0007 35.86C39.87 35.762 39.779 35.6383 39.7277 35.489L39.1257 33.711H35.2477L34.6457 35.489C34.599 35.6197 34.508 35.7387 34.3727 35.846C34.2373 35.9487 34.0717 36 33.8757 36H32.0277L35.9757 25.801H38.3977L42.3457 36ZM35.7937 32.101H38.5797L37.6417 29.308C37.581 29.1307 37.5087 28.923 37.4247 28.685C37.3453 28.4423 37.266 28.181 37.1867 27.901C37.112 28.1857 37.035 28.4493 36.9557 28.692C36.8763 28.9347 36.8017 29.1447 36.7317 29.322L35.7937 32.101Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="61" rx="20" fill="#FF0000"/>
                                    <path d="M24.642 34.292C24.9687 34.292 25.258 34.264 25.51 34.208C25.762 34.152 26 34.0773 26.224 33.984V32.437H25.216C25.0667 32.437 24.95 32.3973 24.866 32.318C24.782 32.2387 24.74 32.1383 24.74 32.017V30.715H28.366V35.02C28.1047 35.2113 27.8317 35.377 27.547 35.517C27.267 35.6523 26.966 35.7643 26.644 35.853C26.3267 35.9417 25.986 36.007 25.622 36.049C25.2627 36.091 24.8753 36.112 24.46 36.112C23.7133 36.112 23.0227 35.9813 22.388 35.72C21.7533 35.454 21.2027 35.09 20.736 34.628C20.274 34.1613 19.91 33.6107 19.644 32.976C19.3827 32.3367 19.252 31.6437 19.252 30.897C19.252 30.1363 19.378 29.4387 19.63 28.804C19.882 28.1647 20.2413 27.614 20.708 27.152C21.1793 26.69 21.7463 26.3307 22.409 26.074C23.0763 25.8173 23.8207 25.689 24.642 25.689C25.0667 25.689 25.4657 25.724 25.839 25.794C26.2123 25.864 26.5553 25.9597 26.868 26.081C27.1853 26.2023 27.4747 26.347 27.736 26.515C27.9973 26.683 28.2307 26.865 28.436 27.061L27.75 28.104C27.6847 28.202 27.6053 28.279 27.512 28.335C27.4233 28.391 27.3253 28.419 27.218 28.419C27.078 28.419 26.9333 28.3723 26.784 28.279C26.5973 28.167 26.42 28.0713 26.252 27.992C26.0887 27.908 25.9207 27.8403 25.748 27.789C25.5753 27.7377 25.3933 27.7003 25.202 27.677C25.0107 27.6537 24.796 27.642 24.558 27.642C24.1147 27.642 23.7157 27.7213 23.361 27.88C23.0063 28.034 22.703 28.2533 22.451 28.538C22.2037 28.8227 22.0123 29.1657 21.877 29.567C21.7417 29.9637 21.674 30.407 21.674 30.897C21.674 31.4383 21.7487 31.919 21.898 32.339C22.0473 32.759 22.2527 33.1137 22.514 33.403C22.78 33.6923 23.0927 33.914 23.452 34.068C23.816 34.2173 24.2127 34.292 24.642 34.292ZM35.0218 31.338C35.1151 31.5153 35.2038 31.6997 35.2878 31.891C35.3765 32.0823 35.4605 32.2783 35.5398 32.479C35.6191 32.2737 35.7031 32.0753 35.7918 31.884C35.8805 31.688 35.9715 31.499 36.0648 31.317L38.6828 26.165C38.7295 26.0763 38.7761 26.0087 38.8228 25.962C38.8741 25.9107 38.9301 25.8733 38.9908 25.85C39.0515 25.8267 39.1191 25.8127 39.1938 25.808C39.2731 25.8033 39.3641 25.801 39.4668 25.801H41.2728V36H39.1868V30.134C39.1868 29.8493 39.2008 29.5413 39.2288 29.21L36.5268 34.453C36.4428 34.6163 36.3285 34.74 36.1838 34.824C36.0438 34.908 35.8828 34.95 35.7008 34.95H35.3788C35.1968 34.95 35.0335 34.908 34.8888 34.824C34.7488 34.74 34.6368 34.6163 34.5528 34.453L31.8368 29.203C31.8555 29.3663 31.8695 29.5297 31.8788 29.693C31.8881 29.8517 31.8928 29.9987 31.8928 30.134V36H29.8068V25.801H31.6128C31.7155 25.801 31.8041 25.8033 31.8788 25.808C31.9581 25.8127 32.0281 25.8267 32.0888 25.85C32.1495 25.8733 32.2031 25.9107 32.2498 25.962C32.3011 26.0087 32.3501 26.0763 32.3968 26.165L35.0218 31.338Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    
                </form>
            </div>
        </main>
    )
}

export default ContactUs
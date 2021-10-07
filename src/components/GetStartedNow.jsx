import { Link } from "react-router-dom";

const GetStartedNow = () => {
	return (
		<div className="container-getstarted">
			<div className="content">
				<div className="heading">
					<h1 className="text-vbold text-blue">Get Started Now</h1>
				</div>
				<div className="details">
					<h3 className="text-regular text-blue text-small">Download the Cardtonic App or register on web and start trading like bosses do.</h3>
				</div>
				<div className="links-box">
					<a href="#">
						<svg width="169" height="57" viewBox="0 0 169 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="168.828" height="56.2761" rx="10" fill="black"/>
							<path d="M85.4363 29.2711C84.7148 29.2677 84.0086 29.4785 83.4071 29.8768C82.8055 30.2751 82.3357 30.843 82.0573 31.5085C81.7788 32.1741 81.7041 32.9073 81.8428 33.6154C81.9814 34.3234 82.3271 34.9743 82.836 35.4857C83.3449 35.9971 83.9942 36.3459 84.7015 36.4879C85.4089 36.6299 86.1425 36.5588 86.8094 36.2835C87.4762 36.0082 88.0464 35.5411 88.4476 34.9415C88.8488 34.3419 89.0629 33.6366 89.0629 32.9152C89.0706 32.436 88.9822 31.9601 88.8028 31.5157C88.6235 31.0713 88.3569 30.6673 88.0189 30.3276C87.6808 29.9879 87.2781 29.7194 86.8345 29.5379C86.391 29.3565 85.9155 29.2658 85.4363 29.2711ZM85.4363 35.1252C84.9915 35.1614 84.5461 35.0626 84.1583 34.8417C83.7706 34.6207 83.4585 34.2879 83.2629 33.8868C83.0673 33.4856 82.9973 33.0348 83.062 32.5932C83.1267 32.1517 83.3231 31.7399 83.6255 31.4117C83.928 31.0836 84.3224 30.8543 84.7573 30.7538C85.1921 30.6534 85.6471 30.6865 86.0629 30.8488C86.4786 31.0111 86.8357 31.2951 87.0875 31.6636C87.3392 32.032 87.474 32.4679 87.4741 32.9142C87.4883 33.1939 87.4465 33.4736 87.3513 33.7369C87.2561 34.0003 87.1093 34.242 86.9196 34.448C86.7298 34.654 86.5009 34.82 86.2462 34.9365C85.9916 35.0529 85.7162 35.1174 85.4363 35.1262V35.1252ZM77.527 29.2711C76.8055 29.2677 76.0993 29.4785 75.4977 29.8768C74.8962 30.2751 74.4264 30.843 74.1479 31.5085C73.8694 32.1741 73.7948 32.9073 73.9334 33.6154C74.0721 34.3234 74.4177 34.9743 74.9267 35.4857C75.4356 35.9971 76.0849 36.3459 76.7922 36.4879C77.4996 36.6299 78.2332 36.5588 78.9 36.2835C79.5669 36.0082 80.1371 35.5411 80.5383 34.9415C80.9395 34.3419 81.1536 33.6366 81.1536 32.9152C81.1622 32.4358 81.0744 31.9596 80.8955 31.5148C80.7166 31.07 80.4501 30.6657 80.112 30.3258C79.7738 29.986 79.3709 29.7175 78.927 29.5363C78.4831 29.3551 78.0074 29.265 77.528 29.2711H77.527ZM77.527 35.1252C77.0822 35.1614 76.6368 35.0626 76.249 34.8417C75.8613 34.6207 75.5492 34.2879 75.3536 33.8868C75.158 33.4856 75.088 33.0348 75.1527 32.5932C75.2174 32.1517 75.4138 31.7399 75.7162 31.4117C76.0187 31.0836 76.4131 30.8543 76.848 30.7538C77.2828 30.6534 77.7378 30.6865 78.1536 30.8488C78.5693 31.0111 78.9264 31.2951 79.1782 31.6636C79.4299 32.032 79.5647 32.4679 79.5648 32.9142C79.579 33.1938 79.5372 33.4734 79.4421 33.7367C79.3469 34 79.2002 34.2417 79.0106 34.4477C78.8209 34.6536 78.5922 34.8197 78.3376 34.9362C78.083 35.0527 77.8078 35.1173 77.528 35.1262L77.527 35.1252ZM68.1324 30.3936V31.9301H71.7938C71.7442 32.6504 71.4519 33.3326 70.9646 33.8654C70.5976 34.2405 70.1558 34.5344 69.6678 34.7277C69.1799 34.9211 68.6568 35.0097 68.1324 34.9878C67.0417 34.9878 65.9957 34.5546 65.2245 33.7833C64.4533 33.0121 64.02 31.9661 64.02 30.8754C64.02 29.7848 64.4533 28.7388 65.2245 27.9675C65.9957 27.1963 67.0417 26.7631 68.1324 26.7631C68.6431 26.7558 69.1503 26.8497 69.6246 27.0393C70.0989 27.229 70.531 27.5106 70.8959 27.8681L71.9835 26.7805C71.4778 26.2776 70.8765 25.881 70.2151 25.6141C69.5536 25.3472 68.8455 25.2154 68.1324 25.2265C66.6347 25.2265 65.1983 25.8214 64.1393 26.8804C63.0803 27.9395 62.4854 29.3758 62.4854 30.8735C62.4854 32.3712 63.0803 33.8075 64.1393 34.8666C65.1983 35.9256 66.6347 36.5205 68.1324 36.5205C68.827 36.5569 69.5215 36.4477 70.1715 36.2C70.8214 35.9524 71.4125 35.5716 71.9068 35.0823C72.401 34.5929 72.7876 34.0057 73.0418 33.3583C73.296 32.7108 73.4121 32.0174 73.3827 31.3225C73.3837 30.998 73.3549 30.6741 73.2966 30.3549L68.1324 30.3936ZM106.592 31.5847C106.377 30.9281 105.965 30.3536 105.412 29.9395C104.859 29.5254 104.191 29.2917 103.501 29.2702C103.034 29.2742 102.574 29.373 102.147 29.5607C101.72 29.7484 101.336 30.0209 101.017 30.3618C100.699 30.7027 100.454 31.1048 100.296 31.5436C100.138 31.9824 100.071 32.4487 100.099 32.9142C100.087 33.6899 100.327 34.4485 100.782 35.0764C101.238 35.7044 101.884 36.1678 102.625 36.3973C103.366 36.6268 104.162 36.61 104.893 36.3495C105.623 36.0889 106.25 35.5986 106.678 34.952L105.452 34.1228C105.269 34.4298 105.008 34.6836 104.696 34.8593C104.384 35.0349 104.032 35.1262 103.674 35.1243C103.305 35.1407 102.941 35.0435 102.629 34.8458C102.318 34.6482 102.074 34.3597 101.932 34.0192L106.77 31.9988L106.592 31.5847ZM101.67 32.8107C101.653 32.5472 101.688 32.2829 101.774 32.0331C101.86 31.7833 101.994 31.5529 102.169 31.3551C102.343 31.1573 102.556 30.9959 102.793 30.8804C103.031 30.7649 103.288 30.6974 103.552 30.6819C103.828 30.6629 104.103 30.7263 104.343 30.8642C104.583 31.002 104.777 31.208 104.899 31.456L101.67 32.8107ZM97.7512 36.3347H99.34V25.6445H97.7512V36.3347ZM95.1386 30.083H95.0864C94.8466 29.8192 94.5528 29.6102 94.2251 29.4701C93.8973 29.3301 93.5433 29.2622 93.1869 29.2711C92.2552 29.3192 91.3775 29.7232 90.7351 30.3997C90.0926 31.0762 89.7344 31.9735 89.7344 32.9065C89.7344 33.8394 90.0926 34.7368 90.7351 35.4133C91.3775 36.0897 92.2552 36.4937 93.1869 36.5418C93.5451 36.5519 93.901 36.4829 94.2293 36.3395C94.5577 36.1962 94.8503 35.9821 95.0864 35.7126H95.1386V36.2302C95.1386 37.6294 94.3965 38.3716 93.2034 38.3716C92.8066 38.3601 92.4223 38.2308 92.0993 38C91.7764 37.7693 91.5294 37.4476 91.3901 37.0759L90.0083 37.6633C90.2647 38.3004 90.7057 38.8464 91.2747 39.2311C91.8437 39.6157 92.5147 39.8215 93.2015 39.822C95.067 39.822 96.6384 38.717 96.6384 36.0396V29.4956H95.1386V30.083ZM93.3253 35.1262C92.7778 35.0735 92.2696 34.8188 91.8998 34.4117C91.53 34.0046 91.3251 33.4744 91.3251 32.9244C91.3251 32.3744 91.53 31.8441 91.8998 31.437C92.2696 31.0299 92.7778 30.7752 93.3253 30.7226C93.8597 30.7927 94.3503 31.0547 94.7057 31.4598C95.0611 31.8649 95.2571 32.3854 95.2571 32.9244C95.2571 33.4633 95.0611 33.9838 94.7057 34.3889C94.3503 34.7941 93.8597 35.0561 93.3253 35.1262ZM114.015 25.6435H110.216V36.3347H111.805V32.2765H114.016C114.465 32.2982 114.914 32.2286 115.335 32.0717C115.756 31.9148 116.141 31.6741 116.466 31.364C116.792 31.054 117.051 30.6811 117.228 30.2679C117.405 29.8548 117.496 29.41 117.496 28.9605C117.496 28.511 117.405 28.0663 117.228 27.6531C117.051 27.24 116.792 26.8671 116.466 26.557C116.141 26.2469 115.756 26.0062 115.335 25.8493C114.914 25.6925 114.465 25.6228 114.016 25.6445L114.015 25.6435ZM114.067 30.7903H111.805V27.1298H114.067C114.557 27.1277 115.027 27.3188 115.376 27.6616C115.726 28.0044 115.926 28.4712 115.933 28.9605C115.92 29.4475 115.718 29.9104 115.371 30.2518C115.024 30.5933 114.557 30.7867 114.07 30.7913L114.067 30.7903ZM123.859 29.2537C123.28 29.2192 122.704 29.3569 122.203 29.6497C121.702 29.9425 121.299 30.3771 121.045 30.8987L122.444 31.486C122.585 31.2308 122.798 31.022 123.055 30.8847C123.313 30.7474 123.605 30.6874 123.895 30.7119C124.301 30.6736 124.704 30.7976 125.018 31.0566C125.332 31.3156 125.531 31.6886 125.57 32.0937V32.1972C125.062 31.9208 124.491 31.7783 123.913 31.7831C122.393 31.7831 120.856 32.6297 120.856 34.1837C120.869 34.512 120.948 34.8344 121.088 35.1316C121.228 35.4288 121.426 35.6948 121.671 35.9139C121.916 36.1329 122.203 36.3006 122.513 36.4068C122.824 36.513 123.153 36.5556 123.481 36.5321C123.882 36.5567 124.282 36.4715 124.638 36.2859C124.994 36.1002 125.292 35.8211 125.502 35.4784H125.554V36.3076H127.09V32.2069C127.094 31.7943 127.01 31.3856 126.846 31.0073C126.681 30.629 126.438 30.2896 126.134 30.0112C125.829 29.7328 125.47 29.5215 125.078 29.3912C124.687 29.2609 124.272 29.2143 123.861 29.2547L123.859 29.2537ZM123.666 35.1078C123.148 35.1078 122.423 34.8485 122.423 34.2099C122.423 33.3806 123.321 33.07 124.098 33.07C124.605 33.0593 125.106 33.1846 125.549 33.4329C125.492 33.8921 125.27 34.315 124.925 34.6232C124.58 34.9313 124.134 35.1039 123.672 35.1088L123.666 35.1078ZM132.646 29.4956L130.833 34.1237H130.781L128.909 29.4956H127.199L130.031 35.9719L128.425 39.5811H130.082L134.437 29.4956H132.646ZM118.382 36.3347H119.971V25.6445H118.382V36.3347Z" fill="white"/>
							<path d="M34.409 28.4187V18.1635C34.409 17.9198 34.3135 17.5711 34.5466 17.4737C34.7568 17.3839 34.9097 17.7154 35.0692 17.8749C38.473 21.2698 41.8732 24.6675 45.27 28.068C45.6626 28.4607 45.6626 28.4607 45.27 28.8543C41.8229 32.2963 38.3755 35.7398 34.9278 39.185C34.8151 39.2977 34.7119 39.5328 34.5399 39.4535C34.368 39.3742 34.409 39.1296 34.409 38.9481C34.409 35.4386 34.409 31.9288 34.409 28.4187Z" fill="white"/>
							<path d="M49.8846 24.1526C49.8364 24.224 49.7838 24.2923 49.727 24.357C48.7716 25.3258 47.8057 26.2888 46.8541 27.2652C46.6554 27.4697 46.5245 27.4344 46.341 27.25C42.8239 23.7246 39.3055 20.202 35.7858 16.6823C35.7075 16.604 35.5575 16.5343 35.6206 16.4015C35.6836 16.2687 35.8327 16.3317 35.9435 16.3365C36.2469 16.3536 36.5419 16.4433 36.8033 16.5983C41.0708 19.0243 45.3382 21.4529 49.6056 23.8841C49.7164 23.9443 49.855 23.9777 49.8846 24.1526Z" fill="white"/>
							<path d="M35.892 40.5901C35.7879 40.5662 35.6503 40.6321 35.6111 40.4993C35.5777 40.3837 35.7 40.3197 35.7688 40.249C36.6458 39.3681 37.5245 38.4885 38.4047 37.6102L46.2323 29.7827C46.6058 29.4091 46.6068 29.4091 46.988 29.7941C47.8727 30.6858 48.7561 31.5775 49.6382 32.4692C49.9736 32.8093 49.9755 32.817 49.5695 33.0482C45.3058 35.4762 41.0419 37.9029 36.7777 40.3283C36.5067 40.4828 36.2035 40.5724 35.892 40.5901Z" fill="white"/>
							<path d="M56.2026 28.4779C56.1745 28.753 56.0774 29.0167 55.9205 29.2445C55.7635 29.4722 55.5517 29.6568 55.3045 29.781C54.3902 30.316 53.4664 30.832 52.5463 31.3603C52.1947 31.5619 51.8393 31.753 51.4954 31.9651C51.4583 31.9963 51.4154 32.0199 51.3691 32.0343C51.3228 32.0487 51.2741 32.0537 51.2258 32.049C51.1775 32.0443 51.1307 32.03 51.0881 32.0068C51.0454 31.9837 51.0079 31.9523 50.9776 31.9144C49.9094 30.8361 48.8353 29.7632 47.755 28.6957C47.564 28.5103 47.5936 28.3814 47.7684 28.2113C48.8512 27.1489 49.9305 26.0821 51.0062 25.0107C51.0637 24.942 51.1455 24.8981 51.2345 24.8883C51.3235 24.8785 51.4129 24.9036 51.4839 24.9582C52.7536 25.6881 54.0329 26.4027 55.2998 27.1374C55.555 27.2615 55.7729 27.4508 55.9315 27.6862C56.09 27.9216 56.1835 28.1947 56.2026 28.4779Z" fill="white"/>
							<path d="M65.8946 20.6323H66.2996L64.6796 16.9323H64.3196L62.6996 20.6323H63.1046L63.5196 19.6673H65.4796L65.8946 20.6323ZM63.6596 19.3473L64.5046 17.3923L65.3446 19.3473H63.6596ZM66.8175 20.6323H67.1975L67.1925 17.5923L69.7625 20.6323H70.0075V16.9323H69.6275L69.6325 19.9723L67.0625 16.9323H66.8175V20.6323ZM72.2717 16.9323H71.0167V20.6323H72.2717C73.3517 20.6323 74.0667 19.8923 74.0667 18.7923C74.0667 17.6723 73.3517 16.9323 72.2717 16.9323ZM72.2417 20.3173H71.3967V17.2473H72.2417C73.1017 17.2473 73.6717 17.8623 73.6717 18.7923C73.6717 19.7023 73.1017 20.3173 72.2417 20.3173ZM77.7001 20.6323L76.6501 19.0573C77.1401 18.9123 77.4401 18.5323 77.4401 18.0273C77.4401 17.3673 76.9501 16.9323 76.2001 16.9323H74.8351V20.6323H75.2151V19.1223H76.1801H76.2651L77.2501 20.6323H77.7001ZM75.2151 17.2473H76.1501C76.6901 17.2473 77.0451 17.5573 77.0451 18.0273C77.0451 18.4923 76.6851 18.8073 76.1501 18.8073H75.2151V17.2473ZM79.8972 20.6823C81.0022 20.6823 81.7422 19.9223 81.7422 18.7823C81.7422 17.6423 81.0022 16.8823 79.8972 16.8823C78.7872 16.8823 78.0422 17.6423 78.0422 18.7823C78.0422 19.9223 78.7872 20.6823 79.8972 20.6823ZM79.8972 20.3673C79.0222 20.3673 78.4422 19.7323 78.4422 18.7823C78.4422 17.8323 79.0222 17.1973 79.8972 17.1973C80.7622 17.1973 81.3472 17.8323 81.3472 18.7823C81.3472 19.7323 80.7622 20.3673 79.8972 20.3673ZM82.506 20.6323H82.886V16.9323H82.506V20.6323ZM85.1526 16.9323H83.8976V20.6323H85.1526C86.2326 20.6323 86.9476 19.8923 86.9476 18.7923C86.9476 17.6723 86.2326 16.9323 85.1526 16.9323ZM85.1226 20.3173H84.2776V17.2473H85.1226C85.9826 17.2473 86.5526 17.8623 86.5526 18.7923C86.5526 19.7023 85.9826 20.3173 85.1226 20.3173ZM91.5782 20.6323H91.9832L90.3632 16.9323H90.0032L88.3832 20.6323H88.7882L89.2032 19.6673H91.1632L91.5782 20.6323ZM89.3432 19.3473L90.1882 17.3923L91.0282 19.3473H89.3432ZM93.8461 16.9323H92.5011V20.6323H92.8811V19.2123H93.8461C94.5711 19.2123 95.0561 18.7523 95.0561 18.0573C95.0561 17.3823 94.5761 16.9323 93.8461 16.9323ZM93.7961 18.8973H92.8811V17.2473H93.7961C94.3161 17.2473 94.6611 17.5773 94.6611 18.0723C94.6611 18.5673 94.3211 18.8973 93.7961 18.8973ZM97.0785 16.9323H95.7335V20.6323H96.1135V19.2123H97.0785C97.8035 19.2123 98.2885 18.7523 98.2885 18.0573C98.2885 17.3823 97.8085 16.9323 97.0785 16.9323ZM97.0285 18.8973H96.1135V17.2473H97.0285C97.5485 17.2473 97.8935 17.5773 97.8935 18.0723C97.8935 18.5673 97.5535 18.8973 97.0285 18.8973ZM101.767 20.6823C102.872 20.6823 103.612 19.9223 103.612 18.7823C103.612 17.6423 102.872 16.8823 101.767 16.8823C100.657 16.8823 99.9123 17.6423 99.9123 18.7823C99.9123 19.9223 100.657 20.6823 101.767 20.6823ZM101.767 20.3673C100.892 20.3673 100.312 19.7323 100.312 18.7823C100.312 17.8323 100.892 17.1973 101.767 17.1973C102.632 17.1973 103.217 17.8323 103.217 18.7823C103.217 19.7323 102.632 20.3673 101.767 20.3673ZM104.376 20.6323H104.756L104.751 17.5923L107.321 20.6323H107.566V16.9323H107.186L107.191 19.9723L104.621 16.9323H104.376V20.6323Z" fill="white"/>
						</svg>
					</a>

					<a href="#">
						<svg width="170" height="57" viewBox="0 0 170 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.677734" width="168.828" height="56.2761" rx="10" fill="white"/>
							<path d="M77.114 35H78.775L75.299 26.86H73.858L70.382 35H72.043L72.703 33.383H76.454L77.114 35ZM73.231 32.096L74.584 28.785L75.937 32.096H73.231ZM82.975 28.961C82.062 28.961 81.402 29.335 80.984 29.962L80.951 29.071H79.51V37.42H81.006V34.142C81.424 34.747 82.073 35.11 82.975 35.11C84.57 35.11 85.813 33.867 85.813 32.008C85.813 30.171 84.57 28.961 82.975 28.961ZM82.634 33.823C81.655 33.823 81.006 33.108 81.006 32.03C81.006 30.952 81.655 30.237 82.634 30.237C83.602 30.237 84.262 30.952 84.262 32.019C84.262 33.108 83.602 33.823 82.634 33.823ZM90.4515 28.961C89.5385 28.961 88.8785 29.335 88.4605 29.962L88.4275 29.071H86.9865V37.42H88.4825V34.142C88.9005 34.747 89.5495 35.11 90.4515 35.11C92.0465 35.11 93.2895 33.867 93.2895 32.008C93.2895 30.171 92.0465 28.961 90.4515 28.961ZM90.1105 33.823C89.1315 33.823 88.4825 33.108 88.4825 32.03C88.4825 30.952 89.1315 30.237 90.1105 30.237C91.0785 30.237 91.7385 30.952 91.7385 32.019C91.7385 33.108 91.0785 33.823 90.1105 33.823ZM99.9639 35.11C101.834 35.11 103.088 34.142 103.088 32.701C103.088 31.238 101.757 30.556 100.503 30.215L100.03 30.083C99.2269 29.852 98.5779 29.621 98.5779 28.972C98.5779 28.4 99.1389 28.037 99.9969 28.037C100.789 28.037 101.438 28.279 102.043 28.763L102.736 27.685C101.955 27.058 101.031 26.75 99.9859 26.75C98.1709 26.75 96.9719 27.74 96.9719 29.225C96.9719 30.556 97.9729 31.117 99.3149 31.48L99.7769 31.612C100.8 31.898 101.482 32.184 101.482 32.844C101.482 33.471 100.888 33.823 99.8649 33.823C99.1169 33.823 98.3469 33.614 97.6539 33.042L97.0709 34.087C97.7969 34.758 98.8419 35.11 99.9639 35.11ZM106.966 33.823C106.482 33.823 106.152 33.471 106.152 32.932V30.292H107.901V29.071H106.152V27.333H104.656V29.071H103.677V30.292H104.656V33.24C104.656 34.362 105.393 35.11 106.482 35.11C107.01 35.11 107.538 35.022 107.989 34.835V33.625C107.648 33.768 107.307 33.823 106.966 33.823ZM111.771 35.11C113.663 35.11 114.939 33.878 114.939 32.03C114.939 30.193 113.663 28.961 111.771 28.961C109.868 28.961 108.592 30.193 108.592 32.03C108.592 33.878 109.868 35.11 111.771 35.11ZM111.771 33.823C110.792 33.823 110.143 33.108 110.143 32.03C110.143 30.952 110.792 30.237 111.771 30.237C112.739 30.237 113.388 30.952 113.388 32.03C113.388 33.108 112.739 33.823 111.771 33.823ZM117.582 29.863L117.56 29.071H116.119V35H117.615V31.821C117.615 30.93 118.429 30.336 119.661 30.336L119.76 28.961C118.803 28.961 118.055 29.28 117.582 29.863ZM125.929 31.942C125.929 30.149 124.741 28.961 122.97 28.961C121.188 28.961 120.011 30.204 120.011 32.074C120.011 33.9 121.221 35.11 123.036 35.11C124.158 35.11 125.093 34.604 125.621 33.812L124.466 33.229C124.114 33.658 123.619 33.933 123.014 33.933C122.145 33.933 121.705 33.405 121.595 32.569H125.885C125.907 32.393 125.929 32.151 125.929 31.942ZM122.97 30.138C123.773 30.138 124.246 30.655 124.356 31.557H121.595C121.716 30.655 122.178 30.138 122.97 30.138Z" fill="#002444"/>
							<path d="M72.175 19.3H70.92V23H72.175C73.255 23 73.97 22.26 73.97 21.16C73.97 20.04 73.255 19.3 72.175 19.3ZM72.145 22.685H71.3V19.615H72.145C73.005 19.615 73.575 20.23 73.575 21.16C73.575 22.07 73.005 22.685 72.145 22.685ZM76.3484 23.05C77.4534 23.05 78.1934 22.29 78.1934 21.15C78.1934 20.01 77.4534 19.25 76.3484 19.25C75.2384 19.25 74.4934 20.01 74.4934 21.15C74.4934 22.29 75.2384 23.05 76.3484 23.05ZM76.3484 22.735C75.4734 22.735 74.8934 22.1 74.8934 21.15C74.8934 20.2 75.4734 19.565 76.3484 19.565C77.2134 19.565 77.7984 20.2 77.7984 21.15C77.7984 22.1 77.2134 22.735 76.3484 22.735ZM83.4489 19.3L82.3389 22.49L81.3239 19.3H80.9589L79.9439 22.49L78.8289 19.3H78.4239L79.7489 23H80.1039L81.1389 19.855L82.1739 23H82.5339L83.8539 19.3H83.4489ZM84.4015 23H84.7815L84.7765 19.96L87.3465 23H87.5915V19.3H87.2115L87.2165 22.34L84.6465 19.3H84.4015V23ZM88.9807 22.685V19.3H88.6007V23H90.7307V22.685H88.9807ZM92.7205 23.05C93.8255 23.05 94.5655 22.29 94.5655 21.15C94.5655 20.01 93.8255 19.25 92.7205 19.25C91.6105 19.25 90.8655 20.01 90.8655 21.15C90.8655 22.29 91.6105 23.05 92.7205 23.05ZM92.7205 22.735C91.8455 22.735 91.2655 22.1 91.2655 21.15C91.2655 20.2 91.8455 19.565 92.7205 19.565C93.5855 19.565 94.1705 20.2 94.1705 21.15C94.1705 22.1 93.5855 22.735 92.7205 22.735ZM97.9414 23H98.3464L96.7264 19.3H96.3664L94.7464 23H95.1514L95.5664 22.035H97.5264L97.9414 23ZM95.7064 21.715L96.5514 19.76L97.3914 21.715H95.7064ZM100.119 19.3H98.8644V23H100.119C101.199 23 101.914 22.26 101.914 21.16C101.914 20.04 101.199 19.3 100.119 19.3ZM100.089 22.685H99.2444V19.615H100.089C100.949 19.615 101.519 20.23 101.519 21.16C101.519 22.07 100.949 22.685 100.089 22.685ZM105.616 23.05C106.721 23.05 107.461 22.29 107.461 21.15C107.461 20.01 106.721 19.25 105.616 19.25C104.506 19.25 103.761 20.01 103.761 21.15C103.761 22.29 104.506 23.05 105.616 23.05ZM105.616 22.735C104.741 22.735 104.161 22.1 104.161 21.15C104.161 20.2 104.741 19.565 105.616 19.565C106.481 19.565 107.066 20.2 107.066 21.15C107.066 22.1 106.481 22.735 105.616 22.735ZM108.225 23H108.605L108.6 19.96L111.17 23H111.415V19.3H111.035L111.04 22.34L108.47 19.3H108.225V23ZM115.926 19.3H113.161V19.615H114.356V23H114.736V19.615H115.926V19.3ZM119.161 19.3V20.96H116.876V19.3H116.496V23H116.876V21.28H119.161V23H119.541V19.3H119.161ZM120.929 22.685V21.27H122.704V20.955H120.929V19.615H122.829V19.3H120.549V23H122.874V22.685H120.929Z" fill="#002444"/>
							<path d="M43.0023 28.3872C42.9597 26.5938 43.338 24.8154 44.1067 23.1945C44.6299 22.14 45.4272 21.2456 46.4149 20.6052C47.4027 19.9648 48.5445 19.6019 49.7208 19.5547C50.364 19.5223 51.0071 19.6231 51.6095 19.8509C52.4115 20.1283 53.2083 20.4203 54.0083 20.6998C54.4876 20.8409 55.0029 20.7923 55.4475 20.5642C56.4996 20.0852 57.614 19.7569 58.7578 19.5891C59.8084 19.4423 60.8789 19.5472 61.8811 19.8951C62.8832 20.2431 63.7884 20.8242 64.522 21.5905C64.6545 21.7229 64.7713 21.871 64.9037 22.0076C65.081 22.1849 65.0883 22.3038 64.8411 22.4519C64.1007 22.8944 63.4758 23.5063 63.0181 24.2374C62.4636 25.0738 62.157 26.0501 62.1337 27.0533C62.0542 27.9691 62.1606 28.8914 62.4466 29.7649C63.0475 31.1666 64.1166 32.316 65.4711 33.0168C65.8507 33.2348 65.857 33.2337 65.6995 33.6269C65.0271 35.4231 64.07 37.0993 62.8648 38.5912C62.3179 39.2686 61.6405 39.8294 60.8728 40.2401C60.3408 40.5081 59.7519 40.6438 59.1563 40.6358C58.5606 40.6278 57.9756 40.4764 57.451 40.1942C56.7227 39.825 55.9231 39.6179 55.1071 39.5873C54.2912 39.5567 53.4783 39.7033 52.7244 40.0169C52.0236 40.3358 51.274 40.5344 50.5072 40.6041C50.1281 40.6441 49.7449 40.6065 49.3809 40.4935C49.0169 40.3806 48.6798 40.1946 48.39 39.947C45.6737 37.5279 43.8558 34.2609 43.2317 30.6775C43.1792 30.4266 43.1395 30.1732 43.1128 29.9183C43.0669 29.3572 43.0325 28.7971 43.0023 28.3872Z" fill="#002444"/>
							<path d="M60.0208 13.2515C59.9545 14.8619 59.3513 16.4038 58.3073 17.6318C57.8249 18.1495 57.2409 18.5621 56.5919 18.844C55.9428 19.1259 55.2426 19.271 54.535 19.2702C54.3066 19.2796 54.3024 19.1357 54.3108 18.9803C54.3448 17.6296 54.8002 16.3234 55.6134 15.2445C56.6516 13.969 58.1178 13.1139 59.7392 12.8385C60.1679 12.7446 59.9562 13.0888 60.0208 13.2515Z" fill="#002444"/>
						</svg>
					</a>
					
					<Link to="/dashboard/signin">
						<svg width="169" height="57" viewBox="0 0 169 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="168.828" height="56.2761" rx="10" fill="#C0FAFF"/>
							<path d="M70.752 35.11C73.304 35.11 75.02 33.438 75.02 30.93C75.02 28.422 73.304 26.75 70.752 26.75C68.189 26.75 66.473 28.422 66.473 30.93C66.473 33.438 68.189 35.11 70.752 35.11ZM70.752 33.823C69.157 33.823 68.079 32.668 68.079 30.93C68.079 29.192 69.157 28.037 70.752 28.037C72.347 28.037 73.414 29.192 73.414 30.93C73.414 32.668 72.347 33.823 70.752 33.823ZM79.6541 28.961C78.8621 28.961 78.1691 29.258 77.7181 29.819L77.6961 29.071H76.2551V35H77.7511V31.513C77.7511 30.743 78.3011 30.237 79.1371 30.237C79.9731 30.237 80.5231 30.743 80.5231 31.513V35H82.0191V31.271C82.0191 29.885 81.0731 28.961 79.6541 28.961ZM91.7874 26.86H85.2754V28.147H87.7504V35H89.3014V28.147H91.7874V26.86ZM96.1111 28.961C95.3411 28.961 94.6591 29.236 94.2081 29.786V26.42H92.7121V35H94.2081V31.513C94.2081 30.743 94.7581 30.237 95.5941 30.237C96.4301 30.237 96.9801 30.743 96.9801 31.513V35H98.4761V31.271C98.4761 29.885 97.5301 28.961 96.1111 28.961ZM105.508 31.942C105.508 30.149 104.32 28.961 102.549 28.961C100.767 28.961 99.5901 30.204 99.5901 32.074C99.5901 33.9 100.8 35.11 102.615 35.11C103.737 35.11 104.672 34.604 105.2 33.812L104.045 33.229C103.693 33.658 103.198 33.933 102.593 33.933C101.724 33.933 101.284 33.405 101.174 32.569H105.464C105.486 32.393 105.508 32.151 105.508 31.942ZM102.549 30.138C103.352 30.138 103.825 30.655 103.935 31.557H101.174C101.295 30.655 101.757 30.138 102.549 30.138ZM119.127 26.86L117.18 32.921L115.277 26.86H113.825L111.944 32.921L109.986 26.86H108.325L111.141 35H112.582L114.551 29.049L116.531 35H117.972L120.777 26.86H119.127ZM126.584 31.942C126.584 30.149 125.396 28.961 123.625 28.961C121.843 28.961 120.666 30.204 120.666 32.074C120.666 33.9 121.876 35.11 123.691 35.11C124.813 35.11 125.748 34.604 126.276 33.812L125.121 33.229C124.769 33.658 124.274 33.933 123.669 33.933C122.8 33.933 122.36 33.405 122.25 32.569H126.54C126.562 32.393 126.584 32.151 126.584 31.942ZM123.625 30.138C124.428 30.138 124.901 30.655 125.011 31.557H122.25C122.371 30.655 122.833 30.138 123.625 30.138ZM131.197 28.961C130.295 28.961 129.646 29.324 129.228 29.929V26.42H127.732V35H129.173L129.206 34.109C129.624 34.736 130.284 35.11 131.197 35.11C132.792 35.11 134.035 33.889 134.035 32.063C134.035 30.204 132.792 28.961 131.197 28.961ZM130.856 33.823C129.877 33.823 129.228 33.108 129.228 32.03C129.228 30.963 129.877 30.237 130.856 30.237C131.824 30.237 132.484 30.963 132.484 32.041C132.484 33.108 131.824 33.823 130.856 33.823Z" fill="#002444"/>
							<path d="M67.52 23.05C68.32 23.05 68.855 22.645 68.855 22.035C68.855 21.38 68.23 21.12 67.695 20.96L67.44 20.885C67.035 20.77 66.685 20.62 66.685 20.21C66.685 19.825 67.03 19.565 67.55 19.565C67.95 19.565 68.265 19.695 68.525 19.94L68.705 19.675C68.42 19.405 68.055 19.25 67.555 19.25C66.795 19.25 66.29 19.655 66.29 20.265C66.29 20.845 66.73 21.08 67.25 21.225L67.5 21.3C68.06 21.465 68.46 21.655 68.46 22.075C68.46 22.475 68.085 22.735 67.495 22.735C67.11 22.735 66.755 22.625 66.47 22.35L66.315 22.62C66.595 22.915 67.045 23.05 67.52 23.05ZM69.6154 23H69.9954V19.3H69.6154V23ZM74.322 21.035H72.752V21.355H73.927C73.887 22.185 73.377 22.735 72.587 22.735C71.732 22.735 71.167 22.1 71.167 21.15C71.167 20.2 71.732 19.565 72.582 19.565C72.977 19.565 73.302 19.66 73.567 19.875L73.817 19.63C73.457 19.36 73.072 19.25 72.582 19.25C71.487 19.25 70.767 20.01 70.767 21.15C70.767 22.29 71.492 23.05 72.582 23.05C73.647 23.05 74.327 22.31 74.327 21.15C74.327 21.11 74.322 21.075 74.322 21.035ZM74.9962 23H75.3762L75.3712 19.96L77.9412 23H78.1862V19.3H77.8062L77.8112 22.34L75.2412 19.3H74.9962V23ZM80.5187 23H80.8987V19.3H80.5187V23ZM81.9103 23H82.2903L82.2853 19.96L84.8553 23H85.1003V19.3H84.7203L84.7253 22.34L82.1553 19.3H81.9103V23ZM89.6113 19.3H86.8463V19.615H88.0413V23H88.4213V19.615H89.6113V19.3ZM91.6209 23.05C92.7259 23.05 93.4659 22.29 93.4659 21.15C93.4659 20.01 92.7259 19.25 91.6209 19.25C90.5109 19.25 89.7659 20.01 89.7659 21.15C89.7659 22.29 90.5109 23.05 91.6209 23.05ZM91.6209 22.735C90.7459 22.735 90.1659 22.1 90.1659 21.15C90.1659 20.2 90.7459 19.565 91.6209 19.565C92.4859 19.565 93.0709 20.2 93.0709 21.15C93.0709 22.1 92.4859 22.735 91.6209 22.735ZM97.1779 23.05C97.8229 23.05 98.3479 22.775 98.6779 22.33L98.4179 22.09C98.1529 22.475 97.7329 22.735 97.1829 22.735C96.2979 22.735 95.7079 22.095 95.7079 21.14C95.7079 20.195 96.3029 19.565 97.1929 19.565C97.6979 19.565 98.0729 19.795 98.3329 20.095L98.5729 19.85C98.2329 19.48 97.7829 19.25 97.1779 19.25C96.0579 19.25 95.3079 20.005 95.3079 21.14C95.3079 22.285 96.0579 23.05 97.1779 23.05ZM102.037 23H102.442L100.822 19.3H100.462L98.8421 23H99.2471L99.6621 22.035H101.622L102.037 23ZM99.8021 21.715L100.647 19.76L101.487 21.715H99.8021ZM105.825 23L104.775 21.425C105.265 21.28 105.565 20.9 105.565 20.395C105.565 19.735 105.075 19.3 104.325 19.3H102.96V23H103.34V21.49H104.305H104.39L105.375 23H105.825ZM103.34 19.615H104.275C104.815 19.615 105.17 19.925 105.17 20.395C105.17 20.86 104.81 21.175 104.275 21.175H103.34V19.615ZM107.706 19.3H106.451V23H107.706C108.786 23 109.501 22.26 109.501 21.16C109.501 20.04 108.786 19.3 107.706 19.3ZM107.676 22.685H106.831V19.615H107.676C108.536 19.615 109.106 20.23 109.106 21.16C109.106 22.07 108.536 22.685 107.676 22.685ZM112.424 19.3H109.659V19.615H110.854V23H111.234V19.615H112.424V19.3ZM114.433 23.05C115.538 23.05 116.278 22.29 116.278 21.15C116.278 20.01 115.538 19.25 114.433 19.25C113.323 19.25 112.578 20.01 112.578 21.15C112.578 22.29 113.323 23.05 114.433 23.05ZM114.433 22.735C113.558 22.735 112.978 22.1 112.978 21.15C112.978 20.2 113.558 19.565 114.433 19.565C115.298 19.565 115.883 20.2 115.883 21.15C115.883 22.1 115.298 22.735 114.433 22.735ZM117.042 23H117.422L117.417 19.96L119.987 23H120.232V19.3H119.852L119.857 22.34L117.287 19.3H117.042V23ZM121.241 23H121.621V19.3H121.241V23ZM124.258 23.05C124.903 23.05 125.428 22.775 125.758 22.33L125.498 22.09C125.233 22.475 124.813 22.735 124.263 22.735C123.378 22.735 122.788 22.095 122.788 21.14C122.788 20.195 123.383 19.565 124.273 19.565C124.778 19.565 125.153 19.795 125.413 20.095L125.653 19.85C125.313 19.48 124.863 19.25 124.258 19.25C123.138 19.25 122.388 20.005 122.388 21.14C122.388 22.285 123.138 23.05 124.258 23.05Z" fill="#002444"/>
							<path d="M45.2022 15.3657C43.7975 15.7055 42.3667 17.1035 41.3672 19.1159C41.0339 19.7823 40.6681 20.6707 40.7139 20.71C40.7726 20.7622 42.4189 21.0105 43.3859 21.1151C44.7121 21.2588 47.3124 21.2588 48.6127 21.1151C49.8409 20.9843 51.2914 20.7427 51.2914 20.6772C51.2914 20.5399 50.8604 19.547 50.5335 18.9264C49.0833 16.1823 47.1491 14.8888 45.2022 15.3657Z" fill="#002444"/>
							<path d="M41.9821 15.9144C40.094 16.5483 38.2777 17.685 36.8991 19.0963C36.5658 19.4361 36.5333 19.4948 36.6378 19.5406C37.2847 19.8019 39.5189 20.488 39.7347 20.488C39.813 20.488 39.911 20.3248 40.0548 19.9457C40.6361 18.4756 41.5313 17.0254 42.4067 16.1237C42.6615 15.8689 42.8446 15.6533 42.8183 15.6533C42.7858 15.6531 42.4135 15.7706 41.9821 15.9144Z" fill="#002444"/>
							<path d="M49.6651 16.2215C50.534 17.1231 51.3571 18.4754 51.9453 19.9454C52.0955 20.3375 52.1871 20.4878 52.2718 20.4878C52.4744 20.4878 54.7481 19.7887 55.3622 19.5404C55.4667 19.4946 55.4209 19.4228 55.0356 19.0373C53.7159 17.6915 51.9388 16.5743 50.1487 15.9602C49.0182 15.5746 49.0314 15.5681 49.6651 16.2215Z" fill="#002444"/>
							<path d="M35.4614 20.8599C34.1874 22.774 33.5081 24.7472 33.299 27.1319L33.2598 27.5435H35.9385H38.6106L38.6433 27.2627C38.6628 27.1124 38.6956 26.6485 38.7151 26.237C38.7803 24.937 39.1397 22.7548 39.46 21.7223L39.584 21.3367L39.3097 21.2715C38.5583 21.0754 37.3758 20.7161 36.7487 20.4876C36.3566 20.3438 36.0038 20.2263 35.9648 20.2263C35.9188 20.226 35.6967 20.5136 35.4614 20.8599Z" fill="#002444"/>
							<path d="M55.3097 20.4613C54.8066 20.6574 53.134 21.167 52.5919 21.2975L52.4219 21.3367L52.5984 21.9706C52.9512 23.2251 53.3171 25.6488 53.3171 26.7596C53.3171 27.0274 53.3366 27.3149 53.3563 27.3932L53.3956 27.5435H56.0676H58.7334L58.7006 27.0991C58.5568 25.3808 58.1388 23.8585 57.4004 22.3429C56.9495 21.4348 56.1526 20.2263 56.0088 20.2328C55.9433 20.2328 55.6363 20.3373 55.3097 20.4613Z" fill="#002444"/>
							<path d="M40.2566 22.0359C39.8843 23.4014 39.6097 25.1392 39.551 26.6093L39.5117 27.5435H45.9865H52.4675V26.9686C52.4675 26.2695 52.3172 24.8127 52.141 23.8522C52.0234 23.1729 51.6509 21.6113 51.5986 21.559C51.5856 21.546 51.2523 21.5918 50.8605 21.6636C47.5023 22.2712 43.9351 22.2319 40.5704 21.559C40.4069 21.5263 40.3939 21.5458 40.2566 22.0359Z" fill="#002444"/>
							<path d="M33.299 28.8635C33.5081 31.2612 34.1874 33.2278 35.4679 35.142C35.8208 35.6778 35.9188 35.7823 36.0298 35.7561C36.1083 35.7366 36.6374 35.56 37.2123 35.364C37.7871 35.168 38.558 34.9262 38.9174 34.8281L39.5772 34.6516L39.4597 34.2728C39.1397 33.2471 38.7803 31.0584 38.7148 29.7649C38.6953 29.3533 38.6626 28.8895 38.6431 28.7327L38.6106 28.4584H35.9385H33.2598L33.299 28.8635Z" fill="#002444"/>
							<path d="M39.5448 29.4318C39.6165 30.8889 39.8778 32.5417 40.2569 33.9595C40.3942 34.4561 40.4072 34.4756 40.5575 34.4363C40.8775 34.3578 42.7789 34.0835 43.5498 34.0052C44.5625 33.9007 47.4371 33.9007 48.4498 34.0052C49.2207 34.0837 51.1221 34.358 51.4356 34.4363C51.5924 34.4756 51.6054 34.4558 51.8014 33.7047C52.1738 32.2869 52.4678 30.2485 52.4678 29.0267V28.4584H45.9868H39.499L39.5448 29.4318Z" fill="#002444"/>
							<path d="M53.3561 28.6673C53.3366 28.7848 53.3103 29.2291 53.2908 29.6472C53.2255 31.0062 52.8727 33.1556 52.5394 34.2466L52.4219 34.6452L53.4086 34.926C53.9509 35.0828 54.7543 35.3311 55.1857 35.4878C55.6235 35.6446 56.0023 35.7751 56.0351 35.7751C56.1201 35.7751 56.721 34.9062 57.0936 34.2398C57.9755 32.685 58.5308 30.8229 58.7009 28.863L58.7396 28.4582H56.0608H53.3888L53.3561 28.6673Z" fill="#002444"/>
							<path d="M44.4385 34.8022C42.9947 34.8872 40.708 35.2072 40.708 35.3248C40.708 35.4358 41.1066 36.3767 41.3874 36.9386C42.3871 38.9312 43.8179 40.3097 45.2289 40.6431C47.1563 41.0939 49.0769 39.8199 50.4947 37.1476C50.8082 36.553 51.2918 35.4555 51.2918 35.3313C51.2918 35.2005 49.0444 34.8934 47.3718 34.7954C46.0981 34.7239 45.7975 34.7239 44.4385 34.8022Z" fill="#002444"/>
							<path d="M39.1069 35.6517C38.656 35.7824 36.9769 36.3245 36.6634 36.4421C36.5066 36.5008 36.5131 36.5073 36.9574 36.9582C38.2837 38.3104 40.0608 39.4276 41.8509 40.0418C42.9811 40.4273 42.9681 40.4338 42.3342 39.7805C41.4523 38.8658 40.6552 37.559 40.0605 36.05C39.8125 35.4361 39.8385 35.4491 39.1069 35.6517Z" fill="#002444"/>
							<path d="M52.0955 35.6254C51.5009 37.298 50.6385 38.768 49.6651 39.7805C49.0314 40.4338 49.0182 40.4273 50.1487 40.0418C51.9388 39.4276 53.7159 38.3104 55.0356 36.9647C55.4212 36.5791 55.467 36.5073 55.3622 36.4616C54.6435 36.1743 52.4874 35.5144 52.2588 35.5144C52.1933 35.5144 52.1215 35.5666 52.0955 35.6254Z" fill="#002444"/>
						</svg>
					</Link>

				</div>
			</div>
		</div>
	)
};

export default GetStartedNow;
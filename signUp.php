<!DOCTYPE html>

<html lang="en">
<!--begin::Head-->

<head>

	<title>Sign Up</title>
	<?php include 'components/head.php' ?>
</head>
<!--end::Head-->
<!--begin::Body-->

<body id="kt_body" class="auth-bg bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat">
	<!--begin::Theme mode setup on page load-->
	<script>var defaultThemeMode = "light"; var themeMode; if (document.documentElement) { if (document.documentElement.hasAttribute("data-bs-theme-mode")) { themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if (localStorage.getItem("data-bs-theme") !== null) { themeMode = localStorage.getItem("data-bs-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script>
	<!--end::Theme mode setup on page load-->
	<!--begin::Main-->
	<!--begin::Root-->
	<div class="d-flex flex-column flex-root  bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat"
		style="background-image:url('assets/media/auth/bg12.png')">
		<!--begin::Authentication - Sign-in -->
		<div class="d-flex flex-column flex-column-fluid flex-lg-row justify-content-center"
			style="background-color: rgba(0,0,0,0.8);">
			<!--begin::Body-->
			<div
				class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center align-items-center justify-content-lg-end p-12 p-lg-20">
				<!--begin::Card-->
				<div
					class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 h-85 h-lg-100 w-lg-600px p-10 p-md-20">
					<!--begin::Wrapper-->
					<div class="d-flex flex-center flex-column flex-column-fluid px-lg-10">
						<!--begin::Form-->
						<form class="form w-100" novalidate="novalidate" id="kt_sign_up_form" action="#">
							<!--begin::Heading-->
							<div class="text-center mb-11">
								<!--begin::Title-->
								<div class="d-flex justify-content-center mb-2">
									<div>
										<a href="index.php" class="d-flex align-items-center justify-content-start">
											<img alt="Logo" src="assets/media/logos/demo16.svg"
												class="w-50px h-50px ms-n3 me-3 mb-2">
											<span class="fw-bold fs-2x" style="color:#704C00">UI Market</span>
										</a>
									</div>
								</div>
								<h1 class="text-gray-900 fw-bolder mb-3">Create an account</h1>
								<!--end::Title-->
								<!--begin::Subtitle-->
								<div class="text-gray-500 fw-semibold fs-6">Welcome to UI Market! Please enter your
									details.</div>
								<!--end::Subtitle=-->
							</div>
							<!--begin::Heading-->
							<!--begin::Login options-->

							<!--end::Login options-->
							<!--begin::Separator-->

							<!--end::Separator-->
							<!--begin::Input group=-->
							<div class="row fv-row mb-8">
								<div class="col-6">
									<!--begin::First Name-->
									<input type="text" placeholder="First Name" name="firstName" autocomplete="off"
										class="form-control bg-transparent">
									<!--end::First Name-->
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
									</div>
								</div>

								<div class="col-6">
									<!--begin::Last Name-->
									<input type="text" placeholder="Last Name" name="lastName" autocomplete="off"
										class="form-control bg-transparent">
									<!--end::Last Name-->
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
									</div>
								</div>
							</div>
							<!--begin::Input group=-->


							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input type="text" placeholder="Email" name="email" autocomplete="off"
									class="form-control bg-transparent" />
								<!--end::Email-->
							</div>
							<!--begin::Input group-->
							<div class="fv-row mb-8" data-kt-password-meter="true">
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3">
										<input class="form-control bg-transparent" type="password"
											placeholder="Password" name="password" autocomplete="off" />
										<span
											class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
											data-kt-password-meter-control="visibility">
											<i class="ki-duotone ki-eye-slash fs-2"></i>
											<i class="ki-duotone ki-eye fs-2 d-none"></i>
										</span>
									</div>
									<!--end::Input wrapper-->

								</div>
								<!--end::Wrapper-->
							</div>
							<!--end::Input group=-->
							<!--end::Input group=-->
							<div class="fv-row mb-8">
								<!--begin::Repeat Password-->
								<input placeholder="Repeat Password" name="confirm-password" type="password"
									autocomplete="off" class="form-control bg-transparent" />
								<!--end::Repeat Password-->
							</div>
							<!--end::Input group=-->
							<!--begin::Accept-->
							<div class="fv-row mb-8">
								<label class="form-check form-check-inline">
									<input class="form-check-input" type="checkbox" name="toc" value="1" />
									<span class="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
										<a href="#" class="ms-1 link-primary">Terms</a></span>
								</label>
							</div>
							<!--end::Accept-->
							<!--begin::Submit button-->
							<div class="d-grid mb-10">
								<button type="submit" id="kt_sign_up_submit" class="btn btn-primary">
									<!--begin::Indicator label-->
									<span class="indicator-label">Sign up</span>
									<!--end::Indicator label-->
									<!--begin::Indicator progress-->
									<span class="indicator-progress">Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									<!--end::Indicator progress-->
								</button>
							</div>
							<!--end::Submit button-->
							<!--begin::Sign up-->
							<div class="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
								<a href="signIn.php" class="link-primary fw-semibold">Sign in</a>
							</div>
							<!--end::Sign up-->
						</form>
						<!--end::Form-->
					</div>
					<!--end::Wrapper-->

				</div>
				<!--end::Card-->
			</div>
			<!--end::Body-->
		</div>
		<!--end::Authentication - Sign-in-->
	</div>
	<!--end::Root-->
	<!--end::Main-->
	<!--begin::Javascript-->
	<script>var hostUrl = "assets/";</script>
	<!--begin::Global Javascript Bundle(mandatory for all pages)-->
	<script src="assets/plugins/global/plugins.bundle.js"></script>
	<script src="assets/js/scripts.bundle.js"></script>
	<!--end::Global Javascript Bundle-->
	<!--begin::Custom Javascript(used for this page only)-->
	<script src="assets/js/custom/authentication/sign-up/general.js"></script>
	<!--end::Custom Javascript-->
	<!--end::Javascript-->
</body>
<!--end::Body-->

</html>
function callApiTrendProduct(limit, page) {
    fetch(`https://admin.uimarket.net/items/products?limit=${limit}&page=${page}&fields=*,categories.category.name,categories.category.id,formats.format.id,formats.format.name,formats.format.icon,preview_images.file.id`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                renderTrendProductList(res.data);
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}

function getProductDetail(slug) {
    fetch(`https://admin.uimarket.net/items/products/${slug}?fields=*,categories.category.name,categories.category.id,formats.format.id,formats.format.name,formats.format.icon,preview_images.file.id`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                renderProductDetail(res.data);
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}

async function getCategories() {
  await  fetch(`https://admin.uimarket.net/items/categories`)
        .then((res) => res.json())
        .then((res) => {
            if (res && res.data) {
                renderCategories(res.data);
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}

function getFormats() {
    fetch(`https://admin.uimarket.net/items/formats`)
        .then((res) => res.json())
        .then((res) => {
            if (res && res.data) {
                renderFormats(res.data);
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}


function callApiProduct(limit, page) {
    fetch(`https://admin.uimarket.net/items/products?limit=${limit}&page=${page}&fields=*,categories.category.name,categories.category.id,formats.format.id,formats.format.name,formats.format.icon,preview_images.file.id`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                renderProductList(res.data, "firstCall");
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
    return;
}

function searchApi(searchText) {
    fetch(`https://admin.uimarket.net/items/products?limit=12&page=1&search=${searchText.search}`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                if (res.data.length < 12) {
                    viewMoreBn.style.display = 'none'
                    renderProductList(res.data, "firstCall");
                }
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}

const DIRECTUS_FILE_API = "https://admin.uimarket.net/assets/";
let count = 2;


// view more btn

const viewMoreBn = document.querySelector("#view-more")


const viewMore = () => {
    fetch(`https://admin.uimarket.net/items/products?limit=12&page=${count++}`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                if (res.data.length < 12) {
                    viewMoreBn.style.display = 'none'
                    renderProductList(res.data, "viewMore");
                } else {
                    renderProductList(res.data, "viewMore");
                }

            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));
}

const getParam = () => {
    // Lấy URL hiện tại
    var currentURL = window.location.href;

    // Tạo một đối tượng URLSearchParams từ query string của URL
    var urlParams = new URLSearchParams(new URL(currentURL).search);

    // Tạo một đối tượng trống để lưu các tham số
    var paramsObj = {};

    // Lặp qua các tham số và thêm chúng vào đối tượng paramsObj
    urlParams.forEach(function (value, key) {
        paramsObj[key] = value;
    });

    return paramsObj;
}



function filterProductByFormat() {
    const formatList = document.getElementById("formatList");
    formatList.onchange = () => {
        let formatId = formatList.options[formatList.selectedIndex].value;
        fetch(`https://admin.uimarket.net/items/products?fields=*,categories.category.name,categories.category.id,formats.format.id,formats.format.name,formats.format.icon,preview_images.file.id`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res.data) {
                    const newProductList = res.data.filter(product =>
                        product.formats.some(formatObj => formatObj.format && formatObj.format.id === formatId)
                    );
                    if (newProductList.length < 12) {
                        viewMoreBn.style.display = 'none';
                        renderProductList(newProductList, "firstCall");
                    }
                } else {
                    console.error('Unexpected data structure:', res);
                }
            })
            .catch((err) => console.log(err));
        return;
    }
}









function gd(limit, page, categoryID) {
    fetch(`https://admin.uimarket.net/items/products?limit=${limit}&page=${page}&filter[categories][_eq]=${categoryID}`)
        .then((res) => res.json())
        .then((res) => {
            
            if (res && res.data) {
                if (res.data.length < 12) {
                    viewMoreBn.style.display = 'none'
                    renderProductList(res.data, "firstCall");
                }
            } else {
                console.error('Unexpected data structure:', res);
            }
        })
        .catch((err) => console.log(err));

}

const getFileName = () => {
    var currentURL = window.location.href;

    // Tạo một đối tượng URL từ URL hiện tại
    var urlObject = new URL(currentURL);

    // Trích xuất phần đường dẫn (pathname) từ đối tượng URL
    var pathname = urlObject.pathname;

    // Tách chuỗi đường dẫn thành các phần bằng dấu "/"
    var pathParts = pathname.split('/');


    var lastPart = pathParts.pop();
    return lastPart;
}

const redirectSearch = () => {
    let searchText = document.querySelector("#search_product_input").value;
    // let checkBoxes = document.querySelectorAll("#categoryList.form-check-input");

    // checkBoxes.forEach(checkBox => {
    //     checkBox.addEventListener('change', function () {
    //         if(this.checked){

    //         }
    //     });
    // })

    // Lấy các thành phần từ window.location
    var protocol = window.location.protocol;  // ví dụ: 'http:'
    var host = window.location.host;          // ví dụ: 'localhost'
    var pathname = window.location.pathname;  // ví dụ: '/ui-market/index.php'

    // Tách pathname để lấy phần cần thiết
    var pathParts = pathname.split('/');      // Tách theo dấu '/'
    pathParts.pop();                          // Loại bỏ phần tử cuối cùng (file name 'index.php')
    var basePath = pathParts.join('/');       // Ghép lại thành đường dẫn

    // Kết hợp lại thành URL gốc
    var baseURL = protocol + '//' + host + basePath + '/';

    console.log(baseURL);  // Kết quả: 'http://localhost/ui-market/'

    window.location.href = baseURL + 'productFilter.php?search=' + encodeURIComponent(searchText);
    return;
}

function addEventSubmitSearchProduct() {
    const form = document.querySelector("#form-search");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        redirectSearch()
    })
}

function filterProductByCategory() {
   const id = document.querySelectorAll("#input_check")
   console.log("🚀 ~ filterProductByCategory ~ id:", id)
}
// In ra phần tử đã tìm được
const renderProductDetail = (data) => {
    if (data) {
        const productTitle = document.querySelectorAll("#productTitle");
        const productDescription = document.querySelector("#productDescription");
        const productImages = document.querySelector("#productImages");
        const productPrice = document.querySelectorAll("#productPrice");
        const productImagesModal = document.querySelectorAll("#productImagesModal");
        const productImageHero = document.getElementById("brander_download_product");
        const productFormatIcon = document.querySelectorAll("#productFormatIcons");

        productImageHero.style.backgroundImage = `url('${getImgURLById(data.hero_image, 600, 300)}')`
        productTitle.forEach(el => el.innerHTML = data.name);
        productDescription.innerHTML = data.description;
        productPrice.forEach(el => el.innerHTML = "Get it now " + data.price);
        productImages.innerHTML = "";

        productFormatIcon.forEach(el => {
            el.innerHTML = "";
            data.formats.forEach(formatObj => {
                el.innerHTML += `<img src="${getImgURLById(formatObj.format.icon, 16, 16)}" alt="">`;
                
            });
        })

        
        

        productImagesModal[0].innerHTML += `
            <img class="w-100 h-auto mb-6 rounded-4" src="${getImgURLById(data.preview_images[0].file.id, 600, 450)}" alt="">
        `;

        data.preview_images.slice(1).forEach(item => {
            productImagesModal[1].innerHTML += `
            <img class="w-100 h-auto mb-6 rounded-4" src="${getImgURLById(item.file.id, 600, 450)}" alt="">
        `;
        });

        data.preview_images.forEach(item => {
            productImages.innerHTML += `
            <div class="col-md-6 col-lg-6 col-xl-6 rounded-4">
            <img class="w-100 d-block rounded-4" src="${getImgURLById(item.file.id, 600, 450)}"
                alt="">
            </div>
            `
        })
    }
}

const renderCategories = (data) => {
    console.log("🚀 ~ renderCategories ~ data:", data)
    if (data) {
        const categoryList = document.getElementById("categoryList");
        data.forEach(item => {
            categoryList.innerHTML += `
            <div class="form-check form-check-custom form-check-solid mb-5" id="input_check">
                <input class="form-check-input" type="checkbox"
                    id="kt_search_category_${item.id}" value="${item.id}">
                <label class="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6"
                    for="kt_search_category_${item.id}">${item.name}</label>
                <span class="text-gray-500 fw-bold">28</span>
            </div>
            `
        })
        filterProductByCategory();
    }
}

const renderFormats = (data) => {
    if (data) {
        const formatList = document.getElementById("formatList");
        data.forEach(item => {
            formatList.innerHTML += `
            <option value="${item.id}">${item.name}</option>
            `;
        })
    }
}


const getImgURLById = (
    id, width, height
) => {
    if (id == null || id == undefined) {
        return DIRECTUS_FILE_API + '6658e4a7-34f0-4fb0-a5fe-782f2defd819' + `/?width=${width}&height=${height}`

    } else {
        return (
            DIRECTUS_FILE_API + id + `/?width=${width}&height=${height}`
        );
    };
}

// product trending list

const productImageHtml = (item, columns) => {
    return `<div class="col-12 col-md-4 col-lg-${columns}">
                <div class="rounded-4">
                    <a href="productDetail.php?page=productDetail?id=${item.id}">
                        <div class="position-relative ">
                            <img class="w-100 rounded-4" src="${getImgURLById(item.cover, 300, 200)}" class="w-full" alt="">
                            <div class="bg-like-active rounded-pill opacity-75 d-flex align-items-center justify-content-center position-absolute py-2 px-3"
                                style="top:20px;right:20px">
                                <div class="icon_heart_group position-relative d-flex align-items-center justify-content-center">
                                    <img class="opacity-100" src="assets/media/icons/duotune/icon/heart.svg" alt="">
                                    <img class="icon_heart_white position-absolute top-50 translate-middle-y opacity-0" style="left:0;" src="assets/media/icons/duotune/icon/heartwhite.svg" alt="">
                                </div>
                                <a class="text-white fw-bold fs-4 ms-2">8000</a>
                            </div>

                            <div class="gold-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#FFBB0D">
                                <span class="text-white fs-4 fw-bold mt-3">1</span>
                            </div>
                            <div class="d-none silver-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#B3BCC1">
                                <span class="text-white fs-4 fw-bold mt-3">2</span>
                            </div>
                            <div class="d-none copper-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#AD9058">
                                <span class="text-white fs-4 fw-bold mt-3">3</span>
                            </div>

                        </div>
                    </a>
                </div>
            </div>`
}

const renderTrendProductList = (data) => {
    console.log(data); // Kiểm tra dữ liệu đầu vào

    if (!Array.isArray(data)) {
        console.error('Expected an array but got:', data);
        return;
    }

    const productTrendList = document.querySelector("#product-trend-list");
    const columns = productTrendList.getAttribute("data-columns");

    data.forEach((item) => {
        productTrendList.innerHTML += productImageHtml(item, columns);
    });
    return;

}

// product list

const productHtml = (item, columns) => {
    return `
    <div class="col-12 col-md-4 col-lg-${columns}">
        <div class="card rounded-4">
            <a href="productDetail.php?page=productDetail?id=${item.id}">
                <div class="position-relative overflow-hidden object-fit-cover rounded-top-4">
                    <img class="w-100" src="${getImgURLById(item.cover, 300, 200)}" alt="">
                    <div class="bg-black rounded-pill opacity-9 d-flex align-items-center justify-content-center position-absolute py-1 px-3"
                        style="top:20px;right:20px">
                        <div class="icon_heart_group position-relative d-flex align-items-center justify-content-center">
                            <img class="opacity-100" src="assets/media/icons/duotune/icon/heart.svg" alt="">
                            <img class="icon_heart_white position-absolute top-50 translate-middle-y opacity-0" style="left:0;" src="assets/media/icons/duotune/icon/heartwhite.svg" alt="">
                        </div>
                        <a class="text-white fw-bold fs-4 ms-2 opacity-100">8</a>
                    </div>

                    <div class="d-none gold-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#FFBB0D">
                        <span class="text-white fs-4 fw-bold mt-3">1</span>
                    </div>
                    <div class="silver-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#B3BCC1">
                        <span class="text-white fs-4 fw-bold mt-3">2</span>
                    </div>
                    <div class="d-none copper-flag position-absolute w-24px h-35px d-flex align-items-center justify-content-center" style="top:0;left:15px;background-color:#AD9058">
                        <span class="text-white fs-4 fw-bold mt-3">3</span>
                    </div>
                   
                </div>

                <div class="card-body py-8 px-9 py-md-4 px-md-5 py-xl-8 px-xl-9">
                    <div class="d-flex align-items-center justify-content-between gap-12">
                        <div class="text-gray-900 text-hover-primary fs-5 fw-bold text-nowrap overflow-hidden" style="text-overflow:ellipsis"> ${item.name}</div>
                        <div class="text-gray-900 text-hover-primary fs-5 fw-bold item-b d-flex align-items-center gap-1">
                            <span>${item.price}</span>
                            <img alt="" src="assets/media/svg/coins/coindes.svg">
                        </div>
                        <div class="d-none text-primary fs-5 text-uppercase fw-bold">free</div>
                    </div>
                    <div class="mt-3 d-flex align-items-center gap-2">
                        <img src="assets/media/avatars/ava.svg" alt="">
                        <span class="text-gray-700 fw-semibold fs-6">Ozenua Cand</span>
                        <span><img alt="" src="assets/media/icons/duotune/icon/play.svg"></span>
                        <span class="text-gray-700 fw-semibold fs-6">UI Kits</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
    `
}

const renderProductList = (data, check) => {
    console.log(data); // Kiểm tra dữ liệu đầu vào

    if (!Array.isArray(data)) {
        console.error('Expected an array but got:', data);
        return;
    }

    const productList = document.querySelector("#product-list");
    const columns = productList.getAttribute("data-columns");

    console.log(productList);
    if (check == "firstCall") {
        productList.innerHTML = "";

        data.forEach((item) => {
            productList.innerHTML += productHtml(item, columns);
        });
        return;
    } else if (check == "viewMore") {
        data.forEach((item) => {
            productList.innerHTML += productHtml(item, columns);
        });
        return;
    }
}
//============================================================================================================

// auth



// Controller
function routerPage(url) {
    console.log("url:" + url);
    getProfile();
    switch (url) {
        case "index.php":
            addEventSubmitSearchProduct();
            callApiTrendProduct(4, 1);
            callApiProduct(12, 1);
            viewMoreBn.addEventListener('click', () => viewMore());
            break;
        case "productDetail.php":
            addEventSubmitSearchProduct();
            const param = getParam();
            const id = param?.page.split('=');
            getProductDetail(id[1])
            callApiProduct(4, 1);
            break;

        case "productFilter.php":
            addEventSubmitSearchProduct();
            let searchText = getParam();
            searchApi(searchText);
            
         const loaddata= async()=>{
              await  getCategories();
              await  getFormats();
            }
            loaddata();
            filterProductByFormat();
            viewMoreBn.addEventListener('click', () => viewMore());
           
            break;

        case "challenges.php":
            addEventSubmitSearchProduct();
            callApiProduct(4, 1);
            viewMoreBn.addEventListener('click', () => viewMore())
            break;

        case "challengesCompleted.php":
            addEventSubmitSearchProduct();
            callApiTrendProduct(1, 1);
            callApiProduct(12, 1);
            break;
        case "signUp.php":
            // signUpForm();
            break;

        default:
            addEventSubmitSearchProduct();
            callApiTrendProduct(4, 1);
            callApiProduct(12, 1);
            break;
    }
}
routerPage(getFileName());
///end controller

function getProfile() {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        document.getElementById('username_text').innerText = token.last_name;
        document.getElementById('email_text').innerText = token.email;
        let avatars = document.querySelectorAll('.avatar');
        if (token) {
            showAvatar(true);
        } else {
            showAvatar(false);
        }
        avatars.forEach((avatar) => {
            avatar.setAttribute("src", `https://admin.uimarket.net/assets/${token.avatar}`);
        })
    }
}

function showAvatar(isLogin) {
    var avatar = document.getElementById("kt_header_user_menu_toggle");
    var buttonLogin = document.getElementById("loginBtn");

    if (isLogin) {
        avatar.style = 'display: flex !important;';
        buttonLogin.style = 'display: none !important;';
    } else {
        avatar.style = 'display: none !important;';
        buttonLogin.style = 'display: block !important;';
    }
}

function logOut() {
    let signOutBtn = document.getElementById('signOutBtn');
    signOutBtn.onclick = function () {
        localStorage.clear();
        location.reload();

    }

}
logOut();
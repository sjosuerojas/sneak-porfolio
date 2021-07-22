import mainLogo from '../assets/main-logo.png'

const Header = () => {
  const view = `
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-5 py-2">
                <div class="d-flex">
                    <a class="navbar-brand" href="/#/">
                        <img src="${mainLogo}" alt="main-logo">
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link active" aria-current="page" href="#!">
                                <button class="btn btn-sm btn-primary px-4 py-1">All</button>
                            </a>
                        </li>
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link fw-light small" href="/#/branding">Branding</a>
                        </li>
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link fw-light small" href="/#/branding">Web</a>
                        </li>
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link fw-light small" href="/#/branding">Photography</a>
                        </li>
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link fw-light small" href="/#/branding">App</a>
                        </li>
                        <li class="nav-item d-flex align-items-center px-2">
                            <a class="nav-link fw-light small" href="/#/branding">
                                <i class="bi bi-search text-primary"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`
  return view
}

export default Header

import images from '../db/data.json'

const Home = async () => { 
  const view = `
    <header class="bg-pink py-20">
        <div class="container px-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center my-5">
                        <h2 class="fw-bolder text-white my-4 text-spaced text-uppercase">Explore beyond horizon</h2>
                        <p class="lead text-white mb-5">Magna mundi referrentur quo, no rebum dignissim qui.
                            Per quodsi accusata id, agam labores.</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <a class="btn btn-sm btn-light px-4 py-2 fw-regular me-sm-3 text-primary text-uppercase"
                                href="#features">View
                                our work</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="conatiner">
        <div class="py-5">
            <div class="d-flex justify-content-center text-center">
                <div class="col-8 col-sm-6 col-md-4 d-flex justify-content-center text-center">
                    <div class="col-2 text-center">
                        <button type="button" class="btn">
                            <i class="bi bi-grid-fill text-primary"></i>
                        </button>
                    </div>
                    <div class="col-2 text-center">
                        <button type="button" class="btn">
                            <i class="bi bi-columns-gap text-primary"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <section id="navigation-section" class="d-flex align-items-center justify-content-center">
            <nav class="navbar navbar-light navbar-expand-lg">
                <div class="container">
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav flex-row mb-2 mb-lg-0">
                            <li class="nav-item d-flex align-items-center px-2">
                                <a class="nav-link active" aria-current="page" href="#!">
                                    <button class="btn btn-sm btn-primary px-4 py-1">All</button>
                                </a>
                            </li>
                            <li class="nav-item d-flex align-items-center px-2">
                                <a class="nav-link fw-light small" href="#!">Branding</a>
                            </li>
                            <li class="nav-item d-flex align-items-center px-2">
                                <a class="nav-link fw-light small" href="#!">Web</a>
                            </li>
                            <li class="nav-item d-flex align-items-center px-2">
                                <a class="nav-link fw-light small" href="#!">Photography</a>
                            </li>
                            <li class="nav-item d-flex align-items-center px-2">
                                <a class="nav-link fw-light small" href="#!">App</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

        <section id="grid-section">
            <div class="grid-row container">
                <div class="column-grid">
                    ${images
                      .map(
                        (item) =>
                          `<img src="${item.picture}" loading="lazy" alt="${item.name}">`
                      )
                      .join('')}
                </div>
                <div class="column-grid">
                    ${images
                      .map(
                        (item) =>
                          `<img src="${item.picture}" loading="lazy" alt="${item.name}">`
                      )
                      .join('')}
                </div>
                <div class="column-grid">
                    ${images
                      .map(
                        (item) =>
                          `<img src="${item.picture}" loading="lazy" alt="${item.name}">`
                      )
                      .join('')}
                </div>
            </div>
        </section>
    </div>`
  return view
}

export default Home

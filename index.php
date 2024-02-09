<?php

    $greetings = [];
    $time = date("H:i");

    if($time <= "12:00"){
        $greetings = "Good Morning...";
    }elseif ($time >= "12:01" && $time <= "16:00" ) {
        $greetings = "Good Afternoon...";
    }elseif ($time >= "16:01" && $time <= "23:59") {
        $greetings = "Good Evening...";
    }

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prabanjan</title>

    <!-- Stylesheet link -->
    <link rel="stylesheet" href="style.css">

    <!-- Box Icons link -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- Bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg shadow-5 fixed-top" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="#" type="button" data-bs-toggle="modal" data-bs-target="#adminLogin">PRABANJAN</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <button class="nav-link" data-bs-toggle="modal" data-bs-target="#backgroundChange">Background</button>
              </li>
            </ul>
          </div>
        </div>
    </nav>

    <!-- Home page -->

    <section id="home">
        <div class="container">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="hero">
              <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h5 class="display-5 fw-bold lh-1 text-body-emphasis"><?php echo $greetings;?></h5>
                <h1 class="display-3 fw-bold lh-1 text-body-emphasis">I'm PRABANJAN</h1>
                <p class="display-6 fw-bold lh-1 text-body-emphasis">I'm a <span class="text-warning">Full Stack</span> Web Developer</p>

                <p class="lead">My journey in the world of technology has been an exciting one, and I thrive on turning innovative ideas into functional, user-friendly applications. With a diverse skill set and a commitment to excellence, I specialize in building efficient and versatile projects using a variety of programming languages and technologies.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <a href="#contact" type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Contact</a>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 p-0 ">
                  <img class="rounded-lg-3 rounded-circle d-none d-sm-block" src="profile.png" width="400" alt="">
              </div>
            </div>
          </div>
    </section>

    <!-- skills page  -->

    <section id="skills">
        <div class="container px-4 py-3" id="featured-3">
            <h2 class="pb-2 border-bottom display-5 fw-bold">Skills</h2>
            <div class="row g-3 py-5 row-cols-1 row-cols-lg-4 d-flex justify-content-between skill-card">
                <!-- Creating Elemnts in JavaScript -->
            </div>    
        </div>
    </section> 

    <!-- Projects page -->

    <section id="projects">
        <div class="container px-4 py-4" id="custom-cards">
            <h2 class="pb-2 border-bottom display-5 fw-bold">Projects</h2>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-1.jpg');" id="project-card">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                      </li>
                      <li class="d-flex align-items-center me-3">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                        <small>Earth</small>
                      </li>
                      <li class="d-flex align-items-center">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                        <small>3d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-2.jpg');" id="project-card">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                      </li>
                      <li class="d-flex align-items-center me-3">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                        <small>Pakistan</small>
                      </li>
                      <li class="d-flex align-items-center">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                        <small>4d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-3.jpg');" id="project-card">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                      </li>
                      <li class="d-flex align-items-center me-3">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                        <small>California</small>
                      </li>
                      <li class="d-flex align-items-center">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                        <small>5d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>


    <!-- Contact page -->
    <section id="contact">
        <div class="container px-4 py-4">
            <h2 class="pb-2 border-bottom display-5 fw-bold">Contact Me Anytime</h2>

            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <!-- contact form php file -->
                <?php include "contactForm.php";?>

                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-2 g-4 contact-card">
                        <!-- Creating Elemnts in JavaScript -->
                    </div>
                </div>
            </div>
        </div>
    </section>
   
 
    <?php include "bgModal.php";?>
   
    <?php include "adminLogin.php";?>

    <!-- JS link -->
    <script src="script.js"></script>

    <!-- Bootstrap link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    <!-- Vennila JS tilt link -->
    <script type="text/javascript" src="vannila-tilt.js"></script>

</body>
</html>
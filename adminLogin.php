<!-- Admin Login Modal -->
<div class="modal fade" id="adminLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-3" id="staticBackdropLabel">Welcome Prabanjan</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form method="post" action="">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="username" id="floatingInput" placeholder="username">
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="password" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-lg btn-primary">Submit</button>
            </form>
        </div>
        <div class="modal-footer">
            <p class="text-start">This is Only for Admin...</p>
            
        </div>
        </div>
    </div>
</div>
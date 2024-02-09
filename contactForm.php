<div class="col" id="contact-form">
    <form method="post" action="">
        <div class="form-floating mb-3">
            <input type="text" class="form-control form-control-sm" name="fullname" id="contact-input" placeholder="fullname">
            <label for="contact-input">FullName</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" name="email_address" id="contact-input" placeholder="email">
            <label for="contact-input">Email Address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="mobile_number" id="contact-input" placeholder="Number">
            <label for="contact-input">Mobile Number</label>
        </div>
        <div class="form-floating mb-3">
            <textarea name="messages" style="height: 100px;resize: none;" class="form-control" placeholder="messages" id="contact-input"></textarea>
            <label for="contact-input">Type your Message here</label>
        </div>
        <button type="submit" class="btn btn-lg btn-primary" id="send-btn">Send Message</button>
    </form>
</div>
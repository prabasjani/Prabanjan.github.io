 <!-- background changing modal -->
<div class="modal fade" id="backgroundChange" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="backgroundChangeLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-3 text-dark" id="backgroundChangeLabel">Change the Background</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div class="card text-bg-dark d-inline-block me-2 mb-2" onclick="bgChange(0)" style="max-width: 125px;">
                    <img src="bg1.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title text-light">Pink Sky</p>
                    </div>
                </div>
                <div class="card text-bg-dark d-inline-block me-2 mb-2" onclick="bgChange(1)" style="width: 125px;">
                    <img src="bg2.jpg"  class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title text-light">Red Leaf</p>
                    </div>
                </div>                    
                <div class="card text-bg-dark d-inline-block me-2 mb-2" onclick="bgChange(2)" style="width: 125px;">
                    <img src="bg3.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title text-danger">Sky</p>
                    </div>
                </div>
                <div class="card text-bg-dark d-inline-block me-2 mt-2" onclick="bgChange(3)" style="width: 125px;height: auto;">
                    <img src="bg4.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title text-light">River</p>
                    </div>
                </div>
                <div class="card text-bg-dark d-inline-block me-2 mt-2" onclick="bgChange(4)" style="width: 125px;">
                    <img src="bg5.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title text-info">Gadgets</p>
                    </div>
                </div>
                <div class="card text-bg-dark d-inline-block me-2 mt-2" onclick="bgChange(5)" style="width: 125px;">
                    <img src="bg6.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <p class="card-title">Night</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
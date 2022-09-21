

import React from 'react'
import '../App.css';
function Profile() {
    return (
        <div class="bg-light" style={{height:"100vh"}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div class="mx-4">
                                <span class="text-black-50">Mansouri</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container p-4 mt-4">
                <div class="row justify-content-evenly mt-4">

                    <div class="col-lg-6 col-md-12 mt-4">
                        <div class="d-flex">
                            <i class="fa-solid fa-user fs-1 mx-2"></i>
                            <h2>Profile</h2>
                        </div>
                        <div class="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor:"white"}}>
                            <form>
                                <div class=" mb-3">
                                    <label class="form-label">Telephone</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="tel" />
                                    </div>
                                </div>
                                <div class=" mb-3">
                                    <label class="form-label">City</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="city" />
                                    </div>
                                </div>
                                <div class=" mb-3">
                                    <label class="form-label">Country</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="country" />
                                    </div>
                                </div>
                                <div class=" mb-3">
                                    <label class="form-label">Bio</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="bio" />
                                    </div>
                                </div>
                                <div class=" mb-3">
                                    <label class="form-label">Address</label>
                                    <div class="input-group">
                                        <textarea type="text" class="form-control" name="address"></textarea>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="submit" class="btn btn-outline-primary">Update <i
                                        class="fa-solid fa-floppy-disk"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile





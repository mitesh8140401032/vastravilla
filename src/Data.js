import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Data() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="aaa"></div>
          <div className="bbb">
            <div className="m">
              <div className="d-flex justify-content-start">
                <button class=" bbb2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">                <i class="bi bi-list"></i>
                </button>

                <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div className="aaa"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          
          
        </div>
      </div>
    </>

  )
}







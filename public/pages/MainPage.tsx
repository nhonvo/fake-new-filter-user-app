import React from "react";

const MainPage  = ()=> {


    return (
        <>
          <h1>
          <main className="position-relative">
    <div className="archive-header text-center mb-50">
        <div className="container">
            <h2>
                <span className="text-dark">Daily News</span>
                <span className="post-count">1256 articles</span>
            </h2>
            <div className="breadcrumb">
                <span className="no-arrow"><i className="ti ti-location-pin mr-5"></i>You are here:</span>
                <a asp-action="Index" asp-controller="HomePage" rel="nofollow">Home</a>
                <span></span>
                Owltrust
            </div>

        </div>
    </div>
    <div className="container">
        <div className="row">= 
            <div className="col-lg-2 col-md-3 primary-sidebar sticky-sidebar sidebar-left order-2 order-md-1">
                @await Component.InvokeAsync("SideBarComponent")
            </div>
            <div className="col-lg-10 col-md-9 order-1 order-md-2">
                <div className="container">
                    <div className="row post-module-1 mb-50" id="update-component">
                    </div>
                </div>

                @*load more when you in bottom page*@
                <a hidden id="dirty1" data-ajax="true" data-ajax-update="#update-component" data-ajax-mode="after" asp-action="AddComponentFour" asp-controller="HomePage"> test </a>
            </div>
        </div>
    </div>
</main>

          </h1>
        </>
    )
}
export default MainPage;
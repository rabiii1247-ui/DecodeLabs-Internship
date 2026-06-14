function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

// close when clicking outside sidebar
document.addEventListener("click", function(event){
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".menu-btn");

    if(!sidebar.contains(event.target) && !button.contains(event.target)){
        sidebar.classList.remove("active");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        var container = project.querySelector('.container_img');
        var overlay = project.querySelector('.overlay');

        container.addEventListener('mousemove', function(e){
            var x = e.offsetX;
            var y = e.offsetY;
            var rotateY = -1/5 * x + 20;
            var rotateX = 4/30 * y - 20;

            overlay.style.backgroundPosition = `${x/5 + y/5}%`;
            overlay.style.filter = `opacity(${x/200}) brightness(1.2)`;

            container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseout', function(){
            overlay.style.filter = 'opacity(0)';
            container.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
        });
    });
});

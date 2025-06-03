// Quando a página carregar, mostrar apenas os posts da categoria "tech"
const defaultFilter = "news";
$(".post-box").hide(); // Esconde tudo primeiro
$(".post-box." + defaultFilter).fadeIn(500); // Aparece suavemente

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");

        if (value == "all") {
            $(".post-box").fadeIn(500); // Suaviza a transição ao exibir tudo
        } else {
            $(".post-box")
                .not("." + value)
                .fadeOut(300); // Esconde suavemente os itens que não pertencem ao filtro
            $(".post-box")
                .filter("." + value)
                .delay(300) // Espera um pouco antes de exibir os novos itens
                .fadeIn(500); // Suaviza a transição ao exibir os novos itens
        }
    });

    // Mudar o botão ativo
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function() {
        const postBox = this.closest(".post-box");
        const description = postBox.querySelector(".post-description");

        description.classList.toggle("expanded");

        // Alterna o texto do botão
        this.textContent = description.classList.contains("expanded") ? "Ver menos..." : "Ver mais...";
    });
});


// Centraliza o card do meio no mobile ao carregar a página
window.addEventListener("load", function () {
    if (window.innerWidth <= 768) {
        const postContainer = document.querySelector(".post");
        const posts = postContainer.querySelectorAll(".post-box");

        if (posts.length > 0) {
            const middleIndex = Math.floor(posts.length / 2);
            const middlePost = posts[middleIndex];

            const offsetLeft = middlePost.offsetLeft - (postContainer.offsetWidth / 2) + (middlePost.offsetWidth / 2);

            postContainer.scrollTo({
                left: offsetLeft,
                behavior: "smooth"
            });
        }
    }
});




// Desabilitar o clique direito
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});


document.addEventListener("keydown", function(event) {
    if ((event.key === "F12") || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
  });
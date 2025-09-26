// Dados de exemplo
const films = [
    {
        id: 1,
        title: "Oppenheimer",
        year: 2023,
        poster: "https://via.placeholder.com/300x450/161b22/58a6ff?text=Oppenheimer",
        rating: 4.5,
        runtime: "180 min",
        genre: "Drama, História",
        overview: "A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial."
    },
    {
        id: 2,
        title: "Barbie",
        year: 2023,
        poster: "https://via.placeholder.com/300x450/161b22/ff6bdf?text=Barbie",
        rating: 4.2,
        runtime: "114 min",
        genre: "Comédia, Fantasia",
        overview: "Barbie começa a ter pensamentos estranhos sobre a morte e viaja para o mundo real para encontrar respostas."
    },
    {
        id: 3,
        title: "Interestelar",
        year: 2014,
        poster: "https://via.placeholder.com/300x450/161b22/8b949e?text=Interestelar",
        rating: 4.8,
        runtime: "169 min",
        genre: "Ficção Científica, Drama",
        overview: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
    },
    {
        id: 4,
        title: "Parasita",
        year: 2019,
        poster: "https://via.placeholder.com/300x450/161b22/ffd700?text=Parasita",
        rating: 4.6,
        runtime: "132 min",
        genre: "Comédia, Thriller",
        overview: "Uma família coreana pobre se infiltra na casa de uma família rica, resultando em consequências imprevistas."
    },
    {
        id: 5,
        title: "A Origem",
        year: 2010,
        poster: "https://via.placeholder.com/300x450/161b22/58a6ff?text=A+Origem",
        rating: 4.7,
        runtime: "148 min",
        genre: "Ficção Científica, Ação",
        overview: "Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos é dado a tarefa inversa de plantar uma ideia na mente de um CEO."
    },
    {
        id: 6,
        title: "Clube da Luta",
        year: 1999,
        poster: "https://via.placeholder.com/300x450/161b22/ff6b6b?text=Clube+da+Luta",
        rating: 4.5,
        runtime: "139 min",
        genre: "Drama",
        overview: "Um homem insatisfeito com sua vida forma um clube de luta subterrâneo como uma forma de terapia alternativa, que se transforma em algo muito maior."
    }
];

// Avaliações de exemplo
let reviews = [
    {
        id: 1,
        filmId: 1,
        user: "Cinéfilo23",
        rating: 5,
        text: "Nolan mais uma vez supera as expectativas. A direção e atuações são impecáveis. A fotografia é deslumbrante e a trilha sonora complementa perfeitamente a tensão do filme.",
        date: "2023-08-15"
    },
    {
        id: 2,
        filmId: 2,
        user: "MovieLover",
        rating: 4,
        text: "Divertido e com uma mensagem importante. Greta Gerwig acertou mais uma vez! O elenco é fantástico e a produção é impecável.",
        date: "2023-07-25"
    },
    {
        id: 3,
        filmId: 3,
        user: "SciFiFan",
        rating: 5,
        text: "Uma obra-prima da ficção científica. A trilha sonora é espetacular! As cenas no espaço são de tirar o fôlego e a história é emocionante do início ao fim.",
        date: "2023-06-10"
    },
    {
        id: 4,
        filmId: 4,
        user: "FilmCritic",
        rating: 5,
        text: "Mestre Bong Joon-ho cria uma sátira social brilhante. A transição de comédia para thriller é perfeita. Mereceu cada Oscar que ganhou!",
        date: "2023-05-20"
    }
];

// Atividades recentes
const activities = [
    {
        user: "Cinéfilo23",
        film: "Oppenheimer",
        rating: 5,
        poster: "https://via.placeholder.com/40x60/161b22/58a6ff?text=O"
    },
    {
        user: "MovieLover",
        film: "Barbie",
        rating: 4,
        poster: "https://via.placeholder.com/40x60/161b22/ff6bdf?text=B"
    },
    {
        user: "FilmCritic",
        film: "Parasita",
        rating: 5,
        poster: "https://via.placeholder.com/40x60/161b22/ffd700?text=P"
    },
    {
        user: "SciFiFan",
        film: "Interestelar",
        rating: 5,
        poster: "https://via.placeholder.com/40x60/161b22/8b949e?text=I"
    }
];

// Elementos DOM
const filmsContainer = document.getElementById('films-container');
const activityContainer = document.getElementById('activity-container');
const reviewsContainerMain = document.getElementById('reviews-container-main');
const filmModal = document.getElementById('film-modal');
const modalFilmTitle = document.getElementById('modal-film-title');
const modalPoster = document.getElementById('modal-poster');
const modalYear = document.getElementById('modal-year');
const modalRuntime = document.getElementById('modal-runtime');
const modalGenre = document.getElementById('modal-genre');
const modalOverview = document.getElementById('modal-overview');
const reviewsContainer = document.getElementById('reviews-container');
const closeModalBtn = document.querySelector('.close-modal');
const submitReviewBtn = document.getElementById('submit-review');

// Variável para armazenar o filme atualmente selecionado
let currentFilmId = null;

// Função para renderizar os filmes
function renderFilms() {
    filmsContainer.innerHTML = '';
    films.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.className = 'film-card';
        filmCard.innerHTML = `
            <img src="${film.poster}" alt="${film.title}" class="film-poster">
            <div class="film-info">
                <div class="film-title">${film.title}</div>
                <div class="film-year">${film.year}</div>
                <div class="film-rating">
                    <span class="stars">${'★'.repeat(Math.round(film.rating))}${'☆'.repeat(5-Math.round(film.rating))}</span>
                    <span>${film.rating}</span>
                </div>
            </div>
        `;
        filmCard.addEventListener('click', () => openFilmModal(film.id));
        filmsContainer.appendChild(filmCard);
    });
}

// Função para renderizar atividades recentes
function renderActivities() {
    activityContainer.innerHTML = '';
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <img src="${activity.poster}" alt="${activity.film}" class="activity-poster">
            <div class="activity-details">
                <div class="activity-user">${activity.user}</div>
                <div class="activity-film">avaliou ${activity.film}</div>
                <div class="activity-rating">${'★'.repeat(activity.rating)}${'☆'.repeat(5-activity.rating)}</div>
            </div>
        `;
        activityContainer.appendChild(activityItem);
    });
}

// Função para renderizar avaliações na página principal
function renderMainReviews() {
    reviewsContainerMain.innerHTML = '';
    
    // Pegar as 3 avaliações mais recentes
    const recentReviews = [...reviews]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    
    if (recentReviews.length === 0) {
        reviewsContainerMain.innerHTML = '<p>Nenhuma avaliação recente.</p>';
        return;
    }
    
    recentReviews.forEach(review => {
        const film = films.find(f => f.id === review.filmId);
        if (!film) return;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = 'main-review-item';
        reviewItem.innerHTML = `
            <img src="${film.poster}" alt="${film.title}" class="main-review-poster">
            <div class="main-review-content">
                <div class="main-review-header">
                    <span class="main-review-film">${film.title}</span>
                    <span class="main-review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
                </div>
                <div class="main-review-user">por ${review.user}</div>
                <p class="main-review-text">${review.text}</p>
                <div class="main-review-footer">
                    <span>${review.date}</span>
                    <span>${film.year}</span>
                </div>
            </div>
        `;
        reviewsContainerMain.appendChild(reviewItem);
    });
}

// Função para abrir o modal com detalhes do filme
function openFilmModal(filmId) {
    const film = films.find(f => f.id === filmId);
    if (!film) return;
    
    currentFilmId = filmId;
    modalFilmTitle.textContent = film.title;
    modalPoster.src = film.poster;
    modalYear.textContent = film.year;
    modalRuntime.textContent = film.runtime;
    modalGenre.textContent = film.genre;
    modalOverview.textContent = film.overview;
    
    // Renderizar avaliações para este filme
    renderReviews(filmId);
    
    filmModal.style.display = 'block';
}

// Função para renderizar avaliações no modal
function renderReviews(filmId) {
    const filmReviews = reviews.filter(r => r.filmId === filmId);
    reviewsContainer.innerHTML = '';
    
    if (filmReviews.length === 0) {
        reviewsContainer.innerHTML = '<p>Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>';
        return;
    }
    
    filmReviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-user">${review.user}</span>
                <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
            </div>
            <p>${review.text}</p>
            <div class="review-date">${review.date}</div>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Fechar modal
closeModalBtn.addEventListener('click', () => {
    filmModal.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === filmModal) {
        filmModal.style.display = 'none';
    }
});

// Enviar avaliação
submitReviewBtn.addEventListener('click', () => {
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const reviewText = document.querySelector('.review-form textarea').value;
    
    if (!ratingInput) {
        alert('Por favor, selecione uma avaliação com estrelas.');
        return;
    }
    
    if (!reviewText.trim()) {
        alert('Por favor, escreva uma avaliação.');
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        filmId: currentFilmId,
        user: "Você", // Em uma aplicação real, seria o nome do usuário logado
        rating: parseInt(ratingInput.value),
        text: reviewText,
        date: new Date().toISOString().split('T')[0]
    };
    
    reviews.push(newReview);
    renderReviews(currentFilmId);
    renderMainReviews();
    
    // Limpar o formulário
    document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
    document.querySelector('.review-form textarea').value = '';
    
    alert('Avaliação enviada com sucesso!');
});

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderFilms();
    renderActivities();
    renderMainReviews();
});
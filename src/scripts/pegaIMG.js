setTimeout(function() {
    const profileImageInput = document.getElementById('profile-image-input');
    const profileImagePreview = document.getElementById('profile-image-preview');

    if (profileImageInput && profileImagePreview) {
        profileImageInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImagePreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    } else {
        console.error('Elementos não encontrados no DOM.');
    }
}, 1000); // Aguarda 1 segundo antes de executar o código

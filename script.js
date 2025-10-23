// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const commands = document.querySelectorAll('.command');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        commands.forEach(command => {
            const text = command.textContent.toLowerCase();
            if (text.includes(query)) {
                command.style.display = 'block';
            } else {
                command.style.display = 'none';
            }
        });
    });
});

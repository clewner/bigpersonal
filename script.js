function toggleCourses(id, button) {
    const courses = document.getElementById(id);
    
    if (courses.classList.contains('hidden')) {
        courses.classList.remove('hidden');
        button.textContent = 'Show fewer courses';
    } else {
        courses.classList.add('hidden');
        button.textContent = 'Show more courses...';
    }
}
// دالة لتغيير الأقسام عند الضغط على الروابط
function showCategory(category) {
    // إخفاء جميع الأقسام
    const categories = document.querySelectorAll('.book-category');
    categories.forEach((categoryElement) => {
        categoryElement.style.display = 'none';
    });

    // إظهار القسم الذي تم اختياره
    const activeCategory = document.getElementById(category);
    if (activeCategory) {
        activeCategory.style.display = 'block';
    }

    // تحديث حالة الرابط النشط
    const links = document.querySelectorAll('#category-list li a');
    links.forEach((link) => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`#category-list li a[onclick="showCategory('${category}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
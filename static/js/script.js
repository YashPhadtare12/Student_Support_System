document.addEventListener('DOMContentLoaded', function() {
    // Dynamic subcategory population based on category selection
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    
    if (categorySelect && subcategorySelect) {
        const subcategories = {
            'academics': ['Grades', 'Course Content', 'Faculty', 'Exams'],
            'facilities': ['Classrooms', 'Library', 'Laboratories', 'Sports'],
            'hostel': ['Room Maintenance', 'Food Quality', 'Security', 'Cleanliness'],
            'administration': ['Fees', 'Documents', 'Certificates', 'Other']
        };
        
        categorySelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            subcategorySelect.innerHTML = '';
            
            if (selectedCategory) {
                subcategories[selectedCategory].forEach(function(subcat) {
                    const option = document.createElement('option');
                    option.value = subcat.toLowerCase().replace(' ', '_');
                    option.textContent = subcat;
                    subcategorySelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'Select a subcategory';
                subcategorySelect.appendChild(option);
            }
        });
    }
    
    // File upload preview
    const fileInput = document.getElementById('file');
    const filePreview = document.getElementById('file-preview');
    
    if (fileInput && filePreview) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                const fileType = file.type.split('/')[0];
                
                if (fileType === 'image') {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        filePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px;">`;
                    }
                    reader.readAsDataURL(file);
                } else {
                    filePreview.innerHTML = `<div class="file-info">${file.name} (${(file.size / 1024).toFixed(2)} KB)</div>`;
                }
            } else {
                filePreview.innerHTML = '';
            }
        });
    }
    
    // Status filter for admin dashboard
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            const status = this.value;
            const rows = document.querySelectorAll('.complaint-row');
            
            rows.forEach(row => {
                if (status === 'all' || row.dataset.status === status) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
});
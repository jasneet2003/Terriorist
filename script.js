  // Define the semesters object outside the event listeners
  const semesters = {
    '1': ['1', '2'],
    '2': ['3', '4'],
    '3': ['5', '6'],
    '4': ['7', '8'],
  };

  // Update semester dropdown on initial page load and when the year selection changes
  document.getElementById('year').addEventListener('change', function () {
    const selectedYear = document.getElementById('year').value;
    const semesterDropdown = document.getElementById('semester');
    semesterDropdown.innerHTML = '<option value="all">Semester</option>';
    if (selectedYear !== 'all') {
      semesters[selectedYear].forEach(sem => {
        const option = document.createElement('option');
        option.value = sem;
        option.textContent = `Semester ${sem}`;
        semesterDropdown.appendChild(option);
      });
    }
  });

  document.getElementById('submitBtn').addEventListener('click', function () {
    const selectedCollege = document.getElementById('college').value;
    const selectedYear = document.getElementById('year').value;
    const selectedSemester = document.getElementById('semester').value;
    const wantsNotes = document.getElementById('notes').checked;
    const wantsPapers = document.getElementById('papers').checked;

    // Dummy values for courses with associated links
    const courses = [
      // ... (previous courses)
      { name: 'Engineering Physics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YGdPKZAaLqRCO6O8k6jxV710sxeG-MoO' },
      { name: 'Engineering Chemistry', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YGdPKZAaLqRCO6O8k6jxV710sxeG-MoO' },
      { name: 'Engineering Mathematics I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dJX2MzzcWEj83pcnKYWVKTKb5_aXNPy8/view?usp=drivesdk' },
      { name: 'Engineering Mathematics II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1hP7ABZI0MG3cl_WLSaWEnQOhQhS5dZwg/view?usp=drivesdk' },
      { name: 'Communication skills', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bNEHxbg1Xe7nWahWShPuX6l7q_xRBshz/view?usp=drivesdk' },
      { name: 'Engineering Graphics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
      { name: 'Basic Mechanical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
      { name: 'Basic Electronics Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bQOZB6EZsOEcdfRy2yhTWJbqHCQaOC1w/view?usp=drivesdk' },
      { name: 'Basic Electrical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aXD60JboCPXuy7_t7FSzZ_cUgnKMorCD/view?usp=drivesdk' },
      { name: 'Basic Civil Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dx8bs8-ht9KHjvSBtbwFXgaIuJIyVGLI/view?usp=drivesdk' },
      { name: 'Computer programming I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
      { name: 'Computer programming II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
      { name: 'History of Science and Technology', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aJcKs2j4xESEzPLvq6TH0G2IxLsJdngr/view?usp=drivesdk' },
      { name: 'Environmental Science', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dN3rIs1UUaQ2__WreTv4FKftrpEGtsd6/view?usp=drivesdk' },
      { name: 'Engineering Workshop', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dNTnRqAmlPbRpzrcDpMPGz5uXK3XQMou/view?usp=drivesdk' },

      // ... (other courses with links)
    ];

    // Filter courses based on user selections
    const filteredCourses = courses.filter(course => {
      return (
        (course.college === selectedCollege || selectedCollege === 'all') &&
        (course.year === selectedYear || selectedYear === 'all') &&
        (course.semester === selectedSemester || selectedSemester === 'all') &&
        (wantsNotes && course.type === 'notes') ||
        (wantsPapers && course.type === 'papers') ||
        (wantsNotes && wantsPapers && course.type === 'both')
      );
    });

    // Display the matching courses
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = '';
  
    if (filteredCourses.length === 0) {
      coursesList.innerHTML = '<p>No matching courses found.</p>';
    } else {
      const courseCards = filteredCourses.map(course => {
        return `
          <div class="course-card">
            <a href="${course.link}" target="_blank">${course.name}</a>
          </div>
        `;
      });
  
      coursesList.innerHTML = courseCards.join('');
    }
  });
  
  // Trigger the change event on initial page load to populate the semester dropdown
  document.getElementById('submitBtn').addEventListener('click', function () {
    // Rest of your code to filter and display results
  
    // After displaying results, scroll to the top
    window.location.href = '#top';
    
    // Move the focus to the anchor to ensure scrolling
    document.getElementById('top').focus();
  });
function openModal(element) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-img');
    var img = element.getElementsByTagName('img')[0];
    modal.style.display = 'block';
    modalImg.src = img.src;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
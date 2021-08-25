/*jshint esversion: 6 */ 
$(document).ready(function () {
    let currentFloor = 2;
    let currentFlat = 40;
    const floorPath = $('.home-image path');
    const counterUp = $('.counter-up');
    const counterDown = $('.counter-down');
    const flatPath = $('.flats path');
    const flatLink = $('.flat-link');
    const modal = $('.modal');
    const modalCloseButton = $('.modal-close-button');
    const viewFlats = $('.view-flats');
    
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', toggleModal);
    viewFlats.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    flatPath.on('mouseover', dataFlat);
    flatLink.on('mouseover', dataFlat);

    function toggleModal() {
        modal.toggleClass('is-open');
    }

    function dataFlat() {
        flatPath.removeClass('current-flat');
        flatLink.removeClass('current-flat');
        currentFlat = $(this).attr('data-flat');
        $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    }
});
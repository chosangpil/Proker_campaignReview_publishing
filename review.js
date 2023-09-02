$('.fa').click(function () {
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')

    let num = $(this).index()
    let starRate = num + 1
    //$('.print').text(starRate)
    if (starRate == 1) {
        $('.print').html("별로에요")
    }
    else if (starRate == 2) {
        $('.print').html("보통 이에요")
    }
    else if (starRate == 3) {
        $('.print').html("그냥 그래요")
    }
    else if (starRate == 4) {
        $('.print').html("맘에 들어요")
    }
    else {
        $('.print').html("아주 좋아요")
    }
})


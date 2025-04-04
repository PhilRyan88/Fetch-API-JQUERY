$(document).ready(function() {
    $.ajax({
        url: 'https://dummyjson.com/products',
        success: function(data, status) {
            console.log(data.products);
            var tbody = $('tbody');
            
            data.products.filter(elem => {
                return elem.brand;
            }).map(elem => {
                let row = `<tr>
                    <td>${elem.title}</td>
                    <td>${elem.brand}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price} $</td>
                    <td>${elem.rating}</td>
                    <td>${elem.stock}</td>
                    <td><button class='v-btn' value="" data-product-id="${elem.id}">View</button></td>
                </tr>`;
                tbody.append(row);
            });
        }
    });


    $(document).on('click', '.v-btn', function() {
        let productId = $(this).data('product-id'); 
        $.ajax({
            url: `https://dummyjson.com/products/${productId}`,
            success: function(data) {
                
                let image = data.thumbnail; // from the objext
                let title = data.title;
                let brand = data.brand;
                let price = data.price;

                //modal contents
                $('.modal-image').attr('src', image).show();
                $('.modal-title').text(title);
                $('.modal-brand').text(brand);
                $('.modal-price').text(price);

               
                $('.modal').show("slow");
            }
        });
    });

    $(document).on('click', '.cl-btn', function() {
        $('.modal').hide("slow");
    });
});


    






    // function display(image,title,brand,price){

    
//     $('.modal-image').attr('src',image).fadeIn(3000);
//     $('.modal-title').text(title);
//     $('.modal-brand').text(brand);
//     $('.modal-price').text(price);
   
//     $('.modal').fadeIn("slow");
// }
// function closeModal(){
//     $('.modal').hide("slow");
// }





<script>
    function ProductInfo({src, name, price, desc}){
        return(
            `<div class="flex my-4 items-center">
                <div class="overflow-hidden h-[12vh] w-20 md:h-20 rounded-lg">
                    <img src=${src} alt="" class="h-full w-full" />
                </div>
                <div class="ml-4">
                    <h2 class="font-semibold text-xm md:text-xl">${name}</h2>
                    <h2 class="font-normal text-xm text-gray-500 md:text-xl">$${price}</h2>
                    <h2 class="font-normal text-xm text-gray-500 md:text-xl">${desc}</h2>
                </div>
            </div>`
        )
    }

    function PaymentMethod({value, option}){
        return (
            `<label for=${value} class="flex items-center p-3 my-2 rounded-lg border-2 border-gray-300">
                <div class="px-1 ml-2 rounded-full border-4 border-black">
                    <input type="radio" id=${value} value=${value} name="payment-method"/>
                </div>
                <span class="ml-2">${option}</span>
            </label>`
        )
    }
</script>

<div class="grid grid-rows-10 mx-3 pb-2 h-[inherit] md:grid-cols-10 md:gap-8">
    <div class="row-span-10 md:col-span-7 overflow-y-scroll remove-scrollbar">
        <h1 class="font-bold text-2xl">Checkout</h1> 
        {@html ProductInfo({src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg", name: "Women's Cargo Utility Jogger", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/5889715/pexels-photo-5889715.jpeg", name: "Men's Suit", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src:"https://images.pexels.com/photos/9489458/pexels-photo-9489458.png", name: "Women's Trouser", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg", name: "Women's Jewelry", price: "78.00", desc: "Size, Medium Color: Black"})}
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Subtotal</h2>
            <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Shipping</h2>
            <h2 class="font-normal text-xm md:text-xl">Free</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Tax</h2>
            <h2 class="font-normal text-xm md:text-xl">To be determined</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Total</h2>
            <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
        </div>
        <div class="flex justify-center md:justify-start">
            <button class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2">Secure Checkout</button>
        </div>
    </div>
    <div class="row-span-10 hidden overflow-y-scroll remove-scrollbar md:col-span-3 md:block">
        <h1 class="font-bold text-xl">Arrives by Wed, Jul 21</h1>
        <p class="my-2 font-normal text-xm text-gray-500">Shipping to 100 Main St, Apt 2, San Francisco, CA 94102 USA</p>
        <h1 class="font-bold text-xl mb-4">Payment</h1>
        <!--Radio element-->
        {@html PaymentMethod({value: "CDC", option:"Credit or Debit Card"})}
        {@html PaymentMethod({value: "Pp", option:"PayPal"})}
        {@html PaymentMethod({value: "Kl", option:"Klarna"})}
        {@html PaymentMethod({value: "Gp", option:"Google Pay"})}
        <!--Payment method info-->
        <div class="mt-4">
            <input type="text" class="my-2  w-[27vw] outline-none p-3 rounded-lg border-2 border-gray-300 bg-white" placeholder="Card number"/>
            <input type="text" class="my-2  w-[27vw] outline-none p-3 rounded-lg border-2 border-gray-300 bg-white" placeholder="MM/YY"/>
            <input type="text" class="my-2  w-[27vw] outline-none p-3 rounded-lg border-2 border-gray-300 bg-white" placeholder="CVV"/>
        </div>
        <div class="flex items-center">
            <input type="checkbox" name="save" id="save" class="mr-2"/>
            <label for="save" class="font-normal text-xm">save credit card for later use</label>
        </div>
        <button class="text-white bg-blue-700 p-2 rounded-lg w-[27vw] font-semibold mt-2">Place Order</button>
    </div>  
</div>
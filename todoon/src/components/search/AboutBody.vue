<template>
    <body>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

            <div class="flex flex-col  lg:flex-row justify-between gap-8">

                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Founded in 2024, ToDOON was born out of the ambition to simplify daily task management for individuals and teams around the world. Our vision was clear: to create a flexible, intuitive and powerful tool that adapts not only to professional but also to personal task management needs.</p>
                </div>

                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12 mt-16">

                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Mission: Simplify Your Life</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">At ToDOON, we believe that the key to increased productivity lies in simplicity and clarity. Our mission is to help you clarify your ideas, structure your projects and cross the finish line of every task with ease and confidence. Whether you're a freelancer, a small business or a large corporation, ToDOON is here to transform the way you work.</p>
                </div>
                <div class="w-full lg:w-8/12 lg:pt-8">

                    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4  rounded-md">

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="h-32 w-32 rounded-full object-cover"   src="../../assets/img/imge about/Thomas.jpg" alt="Thomas featured Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Thomas</p>
                        </div>

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="h-32 w-32  rounded-full object-cover"  src="../../assets/img/imge about/Mathis.jpg" alt="Mathis featured Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Mathis</p>
                        </div>

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="h-32 w-32 rounded-full object-cover" src="../../assets/img/imge about/Adrien.jpg" alt="Adrien featued Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Adrien</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </body>

</template>

<style>
    .button-about {
        padding: 15px 25px;
        border: unset;
        border-radius: 15px;
        color: #ff4785;
        z-index: 1;
        background: #ffffff;
        position: relative;
        font-weight: 1000;
        font-size: 20px;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms;
        overflow: hidden;
    }

    .button-about::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #ff4785;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }

    .button-about:hover {
        color: #e8e8e8;
    }

    .button-about:hover::before {
        width: 100%;
    }
</style>

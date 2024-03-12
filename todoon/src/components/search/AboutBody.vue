<template>
    <body>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

            <div class="flex flex-col  lg:flex-row justify-between gap-8">

                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Fondée en 2024, ToDOON est née de l'ambition de simplifier la gestion des tâches quotidiennes pour les individus et les équipes du monde entier. Notre vision était claire : créer un outil flexible, intuitif et puissant qui s'adapte non seulement aux besoins professionnels mais aussi personnels de gestion des tâches.</p>
                </div>

                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12 mt-16">

                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Notre Mission: Simplifier Votre Vie</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Chez ToDOON, nous croyons que la clé d'une productivité accrue réside dans la simplicité et la clarté. Notre mission est de vous aider à clarifier vos idées, à structurer vos projets et à franchir la ligne d'arrivée de chaque tâche avec aisance et confiance. Que vous soyez un freelance, une petite entreprise ou une grande corporation, ToDOON est là pour transformer votre manière de travailler.</p>
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

            <div class="flex flex-col items-center mt-16">
                <h2 class="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Rejoindre notre aventure</h2>
                <button class="button-about"> Click me!</button>
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

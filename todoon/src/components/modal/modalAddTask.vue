<template>
    <!-- You can open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
    <dialog id="my_modal_4" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Click the button below to close</p>
        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <input type="range" min="0" max="100" value="25" class="range" step="25" />
            <div class="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <button class="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
</template>
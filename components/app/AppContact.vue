<template>
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
      <div class="max-w-screen-sm px-4 mx-auto mb-8 text-center lg:px-6 lg:mb-16">
        <h1 class="mb-4 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Nous contacter
        </h1>
        <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">
          Nous développeront une stratégie efficace adaptée à votre entreprise et à vos objectifs.
        </p>
      </div>
      <div class="grid grid-cols-1 col-span-1 gap-8 pb-24 text-center sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16"
          >
            <svg
              class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Coordonées
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            <b>Performance Ergonomie </b><br>
            SIRET: 326 703 162 00049<br>
          </p>
        </div>
        <div>
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16"
          >
            <svg
              class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Adresse
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            1800 route de villesavin <br>
            41 250 Mont-près-Chambord<br>
            France
          </p>
        </div>
        <div>
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16"
          >
            <svg
              class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </div>
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Nous appeller
          </p>
          <p class="mb-3 text-gray-500 dark:text-gray-400">
            Vous souhaitez que nous vous contactions par téléphone ?
          </p>
          <a href="tel:+33670601317" class="font-semibold text-primary-600 dark:text-primary-500">06 70 60 13 17</a>
        </div>
      </div>
      <h2 class="mb-8 text-3xl font-semibold tracking-tight text-center text-gray-900 mb-18 dark:text-white">
        Formulaire de contact
      </h2>
      <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-2">
        <div class="col-span-2 mb-8 lg:mb-0">
          <form action="#" class="grid max-w-screen-md grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Prénom</label>
              <input
                id="first-name"
                type="text"
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Votre prénom"
                required
              >
            </div>
            <div>
              <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
              <input
                id="last-name"
                type="text"
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Votre nom"
                required
              >
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Votre adresse email"
                required
              >
            </div>
            <div>
              <label
                for="phone-number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Téléphone</label>
              <input
                id="phone-number"
                type="number"
                class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Votre numéro de téléphone"
                required
              >
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre
                message</label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=""
              />
              <p class="mt-4 text-sm text-gray-500">
                En envoyant ce formulaire vous acceptez nos <a
                  href="#"
                  class="text-primary-600 hover:underline dark:text-primary-500"
                >conditions générales</a>
                et notre <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">politique de
                  confidentialité</a>.
              </p>
            </div>
            <button
              type="submit"
              class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

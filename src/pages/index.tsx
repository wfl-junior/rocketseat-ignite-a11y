import * as Dialog from "@radix-ui/react-dialog";
import Head from "next/head";
import Image from "next/image";
import logo from "~/assets/logo.svg";

const title = "Desenvolvendo uma web acessível";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title} | Rocketseat</title>
      </Head>

      <header className="mx-auto flex w-full max-w-[1024px] items-center justify-between px-5 py-6">
        <Image src={logo} width={286 / 2} alt="Blog da Rocketseat" />

        <nav aria-label="Principal">
          <a
            target="_blank"
            href="https://github.com/wfl-junior"
            className="text-rocketseat-primary"
            title="Acessar o GitHub de wfl-junior"
          >
            <svg
              width="28"
              height="28"
              strokeWidth="0"
              fill="currentColor"
              aria-label="GitHub"
              viewBox="0 0 512 512"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z"
                stroke="none"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[776px] px-5 py-6">
        <article className="[&>p]:my-5">
          <header>
            <h1 className="mb-5 text-3xl font-bold">{title}</h1>

            <h2 className="text-xl font-bold">
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>

          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>

          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>

          <h2 className="text-xl font-bold">O que é acessibilidade, afinal?</h2>

          <p>
            Para entender o que é acessibilidade, vamos unir três termos que se
            interligam e estão conectados de alguma maneira: acessibilidade,
            usabilidade e inclusão. Seguindo a cartilha da W3C temos as
            seguintes definições:
          </p>
        </article>
      </main>

      <footer className="mx-auto mt-auto flex w-full max-w-[1024px] items-center justify-between px-5 py-6">
        <Image src={logo} width={286 / 2} alt="Blog da Rocketseat" />

        <Dialog.Root>
          <Dialog.Trigger className="rounded-md bg-rocketseat-shape px-8 py-4 text-rocketseat-secondary hover:underline">
            Termos de uso
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-xs" />

            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-md bg-rocketseat-shape p-6 shadow-lg">
              <Dialog.Title className="text-center text-2xl font-bold">
                Termos de uso
              </Dialog.Title>

              <Dialog.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
                tenetur beatae, aliquam commodi sapiente impedit minima
                voluptate ad consequatur labore iste facilis nisi placeat
                excepturi soluta odit. Iusto, voluptatibus.
              </Dialog.Description>

              <Dialog.Close className="rounded-md bg-rocketseat-primary px-20 py-3 font-bold text-white transition-colors hover:bg-rocketseat-secondary">
                Fechar
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </footer>
    </div>
  );
}

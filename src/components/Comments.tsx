import Link from 'next/link'
import CardComments from './Cards/CardComments'

function Comments() {
  return (
    <section className="mb-20 bg-amber-50 py-16 px-8 rounded-lg">
      <h2 className="text-4xl font-bold mb-12 text-center font-serif ">
        Comentários
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <CardComments
          picture="https://a0.muscache.com/im/pictures/user/0b1f27a8-aac5-4093-9553-53d13565f7a5.jpg?im_w=240"
          personName="Mariana"
          description="Nós amamos a estadia no Refúgio. O lugar é bem reservado, com uma vista linda para uma área verde. A casa traz um ar de aconchego, nos sentimos muito acolhidos. Cozinha bem equipada, com tudo preparado para nos receber. Já estive em alguns Airbnb e ressalto o galão de água que já estava disponível no local para nós, foi o primeiro Airbnb que fui que já tinha água. Isso ajuda muito pois os galões são pesados e sempre temos que ter essa preocupação. Valéria sempre muito atenciosa e querida, chegamos no local recepcionados com bolo e café, outra gentileza que é difícil encontrar pelos Airbnbs. Gostamos muito dos dias que passamos lá!"
        />
        <CardComments
          picture="https://a0.muscache.com/im/pictures/user/459db04a-ed33-420c-8795-915b05ae12f3.jpg?im_w=240"
          personName="Bárbara"
          description="É difícil colocar em poucas palavras o que o espaço da Valéria representou nesses dias para mim e minha família. Nos sentimos acolhidos e super em casa em um espaço completo, com tudo o que precisávamos e até o que não precisávamos. Perfeito! Como se não bastasse, caminhando só um pouquinho saímos de um refúgio no paraíso para outro paraíso, que é a Praia da Lagoinha do Norte. Valeria, já estamos com saudade e se Deus quiser em breve voltaremos. Muito amor, paz, saúde e prosperidade para ti e família e para esse empreendimento de ótima energia que vocês construíram. Beijão da Babi e família!"
        />
        <CardComments
          picture="https://a0.muscache.com/im/users/24047429/profile_pic/1416699548/original.jpg?im_w=240"
          personName="Rafael"
          description="Tivemos uma estadia maravilhosa na Lagoinha Refúgio House, a anfitriã Valéria providenciou a melhor experiência de recepção que já tivemos no Airbnb!! Casa completa, aconchegante, um lugar especial para ter momentos memoráveis em família."
        />
        <CardComments
          picture="https://a0.muscache.com/im/pictures/user/e2fb95e1-4d4d-44ec-b5ad-aaf04a321fab.jpg?im_w=240"
          personName="Mateus"
          description="Estadia maravilhosa, local aconchegante e tranquilo, bem próximo à praia. Valeria super atenciosa e simpática."
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center h-full mt-12">
        <Link
          href="https://www.airbnb.com.br/rooms/39986251/reviews?source_impression_id=p3_1729691859_P3luUCVFVsb_lgcq"
          target="_blank"
          className="text-xl font-bold mb-12 text-center font-serif underline"
        >
          Veja todos os comentários!
        </Link>
      </div>
    </section>
  )
}

export default Comments

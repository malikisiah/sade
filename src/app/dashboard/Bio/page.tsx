/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function BioPage() {
  return (
    <div className='lg:mx-96 pt-16'>
      <h1 className='font-bold text-3xl pb-4'>Behind the Music</h1>
      <p className='text-lg pb-6'>
        Sade Adu, born Helen Folasade Adu on January 16, 1959 in Ibadan,
        Nigeria, is the frontwoman of the British band Sade. With her hauntingly
        beautiful voice and timeless aesthetic, she has captivated audiences
        worldwide, making a significant mark in the world of music.
      </p>
      <p className='text-lg pb-6'>
        Sade's journey began in Nigeria, where she was born to a Nigerian father
        and a British mother. After her parents' divorce when she was four, she
        moved to England with her mother, where she spent most of her childhood.
      </p>
      <div className='flex justify-center pb-8'>
        {" "}
        <Image
          className='rounded-lg'
          src='https://78.media.tumblr.com/d6f136ba67f6d8dda0255b83e11a07e1/tumblr_o6uoetx7rq1sh72jyo1_500.jpg'
          alt=''
          width={500}
          height={500}
          quality={100}
        ></Image>
      </div>
      <p className='text-lg pb-6'>
        In 1984, Sade released their debut album "Diamond Life", featuring the
        iconic track "Smooth Operator." The album was a commercial and critical
        success, reaching the top 10 in the UK charts and winning the Brit Award
        for Best British Album in 1985.
      </p>
      <p className='text-lg pb-6'>
        Over the years, Sade's music has remained a unique blend of soul, jazz,
        and R&B, with elements of funk and pop. Sade's sensuous, minimalist
        style and her emotionally evocative lyrics have remained a constant
        throughout her career.
      </p>
      <p className='text-lg pb-6'>
        Sade's later albums, including "Promise" (1985), "Stronger Than Pride"
        (1988), and "Love Deluxe" (1992), each displayed a progression in her
        sound, while staying true to her roots. After a hiatus, the band
        returned in 2000 with "Lovers Rock" and then again in 2010 with "Soldier
        of Love."
      </p>
      <p className='text-lg pb-6'>
        Despite the long gaps between her albums, Sade's popularity has remained
        unscathed. Her ability to stay relevant in a rapidly changing music
        industry testifies to the timeless appeal of her music. The enigmatic
        singer is known for her reclusiveness, rarely making public appearances
        or giving interviews, which only adds to her allure.
      </p>
      <p className='text-lg pb-6'>
        Sade's influence extends beyond music. Her understated elegance, both in
        her music and her personal style, has had a significant impact on
        fashion and pop culture.
      </p>
      <p className='text-lg pb-6'>
        Throughout her illustrious career, Sade has been the recipient of
        several prestigious awards, including a Grammy for Best New Artist in
        1986 and several other Grammy awards in the years that followed. In
        2002, she was appointed an Officer of the Order of the British Empire
        (OBE) for services to music, and she was further promoted to Commander
        of the Order of the British Empire (CBE) in 2017.
      </p>

      <div className='flex justify-center pb-8'>
        {" "}
        <Image
          className=' rounded-lg'
          src='https://guardian.ng/wp-content/uploads/2018/02/Sade.-Salute-Magazine-e1519384557831.jpg'
          alt=''
          width={500}
          height={500}
          quality={100}
        ></Image>
      </div>
      <p className='text-lg pb-6'>
        {" "}
        Sade remains one of the most revered figures in music, known for her
        distinctive sound, timeless style, and the emotional depth of her music.
      </p>
    </div>
  );
}

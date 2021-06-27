import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { BookDetailsRouteMatch } from '../routes/config'

export const Home: React.FC<{}> = () => {
  return (
    <>
      <h1>
        Welcome to the <pre style={{ display: 'inline' }}>pwa-books</pre> app!
      </h1>
      <p>This is a personal project of mine, I'm using it to play around.</p>
      <Link
        to={generatePath(BookDetailsRouteMatch, {
          isbn: '9782205049879',
        })}
      >
        Example book page
      </Link>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
        lobortis suscipit. Aenean vitae tortor venenatis libero lacinia
        efficitur. Aenean in enim id est porttitor commodo. Maecenas hendrerit
        tellus et nibh interdum, eu imperdiet purus eleifend. Suspendisse at
        justo vitae diam semper maximus lacinia eget risus. Integer nisl ante,
        pretium non nisi a, finibus sodales turpis. Mauris ullamcorper
        scelerisque augue sit amet faucibus.
      </p>
      <p>
        Nam lacinia, arcu quis congue consectetur, erat dui semper massa, id
        sagittis magna tortor et dolor. Vivamus sed libero in diam sodales
        iaculis. Aenean et porttitor ipsum, a consequat tellus. In hac habitasse
        platea dictumst. Nulla pellentesque nisi sed elementum rhoncus. Donec
        quis erat sed nisi gravida commodo a eu libero. Nam massa leo, congue
        sit amet diam sit amet, porttitor commodo eros. Nulla eget sapien vitae
        felis sollicitudin viverra. Vestibulum convallis mi porta nisi ornare
        condimentum. Integer ac hendrerit nunc, a vulputate metus. Curabitur
        semper efficitur ligula in eleifend. Cras nec sapien erat. Sed at
        bibendum nibh. Nullam lobortis ex in ligula pulvinar volutpat. Duis ante
        leo, tristique at sapien vitae, consectetur iaculis lectus.
      </p>
      <p>
        Mauris vitae euismod nulla, id sagittis ex. Vivamus eget ultrices erat.
        Proin cursus, est et aliquam euismod, ex orci consectetur arcu, nec
        placerat massa ante vitae odio. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Proin nec
        volutpat lorem. Phasellus sed ex sapien. Mauris condimentum sit amet leo
        in tristique. Duis euismod tempus ex, id vehicula justo efficitur nec.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Duis varius, erat ut ultrices feugiat, erat
        tortor sodales velit, ut suscipit ante nulla ac nunc. Cras quis
        vestibulum justo. Integer fermentum aliquam eleifend. Curabitur sit amet
        egestas risus, non sagittis lacus.
      </p>
      <p>
        Sed tempor pharetra egestas. Mauris dignissim accumsan ex, at
        pellentesque risus ullamcorper at. Praesent imperdiet purus eget magna
        blandit, quis rutrum quam porttitor. Aliquam risus lacus, accumsan
        egestas velit non, mollis convallis massa. Vestibulum eget nunc iaculis,
        tempus ex sit amet, feugiat risus. Mauris vel eros libero. Nulla
        placerat gravida sapien, scelerisque tincidunt quam. Sed quis dignissim
        justo. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec cursus, diam vel molestie volutpat, tortor magna
        venenatis orci, id tempus urna nibh at nibh. Etiam at tristique lectus,
        quis viverra velit. Donec pharetra ligula non quam convallis, eget
        vulputate nisl elementum. Nam nec accumsan eros, eget pulvinar elit.
        Integer ornare aliquet lectus sed laoreet. Morbi vitae consequat dolor.
      </p>
      <p>
        Maecenas auctor maximus lobortis. Sed id est quis purus semper
        sollicitudin quis euismod quam. Donec mattis nibh ligula, eu lacinia
        urna viverra at. Quisque nec elit enim. Sed libero nulla, finibus id
        facilisis et, dictum at quam. Praesent aliquet tortor magna, id laoreet
        ipsum aliquet eu. Integer fringilla mauris in rhoncus molestie.
        Curabitur laoreet, orci non fringilla sagittis, metus odio placerat est,
        eget eleifend justo erat vitae tortor. Pellentesque turpis dui, rutrum
        non quam quis, sodales scelerisque leo. Donec arcu libero, consequat eu
        nibh eget, iaculis egestas magna. Quisque feugiat, velit eget eleifend
        dictum, lorem nibh semper sapien, viverra venenatis nibh eros ac risus.
        Mauris tristique massa at odio venenatis, quis congue dui lacinia.
        Vestibulum pellentesque tellus quis tortor pharetra, sed finibus dolor
        fermentum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
        lobortis suscipit. Aenean vitae tortor venenatis libero lacinia
        efficitur. Aenean in enim id est porttitor commodo. Maecenas hendrerit
        tellus et nibh interdum, eu imperdiet purus eleifend. Suspendisse at
        justo vitae diam semper maximus lacinia eget risus. Integer nisl ante,
        pretium non nisi a, finibus sodales turpis. Mauris ullamcorper
        scelerisque augue sit amet faucibus.
      </p>
      <p>
        Nam lacinia, arcu quis congue consectetur, erat dui semper massa, id
        sagittis magna tortor et dolor. Vivamus sed libero in diam sodales
        iaculis. Aenean et porttitor ipsum, a consequat tellus. In hac habitasse
        platea dictumst. Nulla pellentesque nisi sed elementum rhoncus. Donec
        quis erat sed nisi gravida commodo a eu libero. Nam massa leo, congue
        sit amet diam sit amet, porttitor commodo eros. Nulla eget sapien vitae
        felis sollicitudin viverra. Vestibulum convallis mi porta nisi ornare
        condimentum. Integer ac hendrerit nunc, a vulputate metus. Curabitur
        semper efficitur ligula in eleifend. Cras nec sapien erat. Sed at
        bibendum nibh. Nullam lobortis ex in ligula pulvinar volutpat. Duis ante
        leo, tristique at sapien vitae, consectetur iaculis lectus.
      </p>
      <p>
        Mauris vitae euismod nulla, id sagittis ex. Vivamus eget ultrices erat.
        Proin cursus, est et aliquam euismod, ex orci consectetur arcu, nec
        placerat massa ante vitae odio. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Proin nec
        volutpat lorem. Phasellus sed ex sapien. Mauris condimentum sit amet leo
        in tristique. Duis euismod tempus ex, id vehicula justo efficitur nec.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Duis varius, erat ut ultrices feugiat, erat
        tortor sodales velit, ut suscipit ante nulla ac nunc. Cras quis
        vestibulum justo. Integer fermentum aliquam eleifend. Curabitur sit amet
        egestas risus, non sagittis lacus.
      </p>
      <p>
        Sed tempor pharetra egestas. Mauris dignissim accumsan ex, at
        pellentesque risus ullamcorper at. Praesent imperdiet purus eget magna
        blandit, quis rutrum quam porttitor. Aliquam risus lacus, accumsan
        egestas velit non, mollis convallis massa. Vestibulum eget nunc iaculis,
        tempus ex sit amet, feugiat risus. Mauris vel eros libero. Nulla
        placerat gravida sapien, scelerisque tincidunt quam. Sed quis dignissim
        justo. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec cursus, diam vel molestie volutpat, tortor magna
        venenatis orci, id tempus urna nibh at nibh. Etiam at tristique lectus,
        quis viverra velit. Donec pharetra ligula non quam convallis, eget
        vulputate nisl elementum. Nam nec accumsan eros, eget pulvinar elit.
        Integer ornare aliquet lectus sed laoreet. Morbi vitae consequat dolor.
      </p>
      <p>
        Maecenas auctor maximus lobortis. Sed id est quis purus semper
        sollicitudin quis euismod quam. Donec mattis nibh ligula, eu lacinia
        urna viverra at. Quisque nec elit enim. Sed libero nulla, finibus id
        facilisis et, dictum at quam. Praesent aliquet tortor magna, id laoreet
        ipsum aliquet eu. Integer fringilla mauris in rhoncus molestie.
        Curabitur laoreet, orci non fringilla sagittis, metus odio placerat est,
        eget eleifend justo erat vitae tortor. Pellentesque turpis dui, rutrum
        non quam quis, sodales scelerisque leo. Donec arcu libero, consequat eu
        nibh eget, iaculis egestas magna. Quisque feugiat, velit eget eleifend
        dictum, lorem nibh semper sapien, viverra venenatis nibh eros ac risus.
        Mauris tristique massa at odio venenatis, quis congue dui lacinia.
        Vestibulum pellentesque tellus quis tortor pharetra, sed finibus dolor
        fermentum.
      </p>
    </>
  )
}

export default Home

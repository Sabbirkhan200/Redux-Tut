import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { red } from '@mui/material/colors'

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1,
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        marginTop: 10,
        border: '5px solid white',
        borderRadius: '10px',
        width: '80%',
        marginLeft: 20,
        height: 450,
        textAlign: 'center',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1
        const rows = item.featured ? 2 : 1

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'pic/93292123_2642339619345466_4436947404293406720_n.jpg',
    title: 'House garden',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'pic/19642731_2035286643384103_1127518573248600601_n.jpg',
    title: 'Internation bussness tradation',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'pic/242575687_3061902577389166_700931650754831045_n.jpg',
    title: 'sky',
    author: '@helloimnik',
  },
  {
    img: 'pic/142305030_2887472191498873_6430891655074851133_n.jpg',
    title: 'School program',
    author: '@nolanissac',
  },
  {
    img: 'pic/265206961_3120339258212164_1982468147751500437_n.jpg',
    title: 'Tour',
    author: '@hjrc33',
  },
  {
    img: 'pic/54278328_2320778821501549_1657516145399300096_n.jpg',
    title: 'cousen house',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'pic/51182279_2294060670840031_396852392580087808_n.jpg',
    title: 'Rajsahi Jomidar Bari',
    author: '@tjdragotta',
  },
  {
    img: 'pic/278010979_3207176826195073_8297853833223420057_n.jpg',
    title: 'Golap gram',
    author: '@katie_wasserman',
  },
  {
    img: 'pic/71581729_727402117672776_4014349629121363968_n.jpg',
    title: 'Collage Program',
    author: '@silverdalex',
  },
  {
    img: 'pic/314489620_3378216019091152_8384675101792192944_n.jpg',
    title: 'Mind fress',
    author: '@shelleypauls',
  },
  {
    img: 'pic/29598166_2071504073095693_6677823264720264298_n.jpg',
    title: 'Last day in Collage',
    author: '@peterlaster',
  },
  {
    img: 'pic/sabbir.jpg',
    title: 'Rajsahi',
    author: '@southside_customs',
  },
]

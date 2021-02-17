import axios from 'axios';

const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs.map(x => <img key={x} src={x}/>)}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random/5');
    const data = res.data;
    return {
      props: {dogs : data.message}, // will be passed to the page component as props
    }
  }


  export default Dogs;
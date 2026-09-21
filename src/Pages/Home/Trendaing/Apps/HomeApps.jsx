
import { ArrowDownToLine } from 'lucide-react';
import Star from '../../../../assets/icon-ratings.png';
import { Link } from 'react-router';
const HomeApps = ({ item }) => {
    const { image, title, downloads, ratingAvg, id } = item;
    return (
        <>
            <Link to={`details/${id}`}>
                <div className="card bg-white pt-4 sm:p-4 shadow-sm">
                    <figure>
                        <img className='rounded-xl mx-auto w-auto sm:h-60'
                            src={image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex justify-between gap-30'>
                            <p className='flex px-0 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>{
                                downloads >= 1000000 ?
                                    downloads / 1000000 + "M"
                                    :
                                    downloads >= 1000 ?
                                        downloads / 1000 + "K"
                                        :
                                        downloads
                            }</p>
                            <p className='flex px-0 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HomeApps;
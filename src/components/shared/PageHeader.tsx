import VideoContainer from './VideoContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageHeader = (props: any) => {

    const navigation = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [navigation])

  return (
    <VideoContainer video={props.video} type="page-header">
      <div className="page-header">
        <h1>{props.title}</h1>
      </div>
    </VideoContainer>
  );
}

export default PageHeader;
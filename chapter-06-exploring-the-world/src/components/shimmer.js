import { ShimmerThumbnail,ShimmerText } from "react-shimmer-effects-18";

const ShimmerUi = () => {
    return (
        <div className="card">
          <ShimmerThumbnail height={250} rounded />
          <h2><ShimmerText line={1} gap={10} /></h2>
          <p><ShimmerText line={1} gap={10} /></p>
          <span>
            <p>rating <ShimmerText line={1} gap={10} /></p>
            <p><ShimmerText line={1} gap={10} /> min</p>
            <p><ShimmerText line={1} gap={10} /></p>
          </span>
          <p></p>
        </div>
      );
}

export default ShimmerUi;
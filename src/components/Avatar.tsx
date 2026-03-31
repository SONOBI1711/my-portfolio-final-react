export default function Avatar({ src, alt, className = "" }) {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  );
}

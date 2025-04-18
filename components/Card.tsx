import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-violet-900/70 dark:text-violet-200">{description}</p>
      <button className='hover:cursor-pointer dark:bg-white/10 dark:text-violet-200 bg-violet-400/40 text-violet-800 px-5 py-2 rounded-xl backdrop-blur-md hover:scale-105 transition transform duration-200 border dark:border-white/20 border-violet-900/20 hover:bg-violet-100/30 hover:border-violet-200'>
      {href && (
          <Link
            href={href}
            className="t text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </button>
      </div>
    </div>
  </div>
)

export default Card

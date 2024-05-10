import { data } from "./config"
import "./style.scss"

export default function App() {
  return (
    <div className="page">
      <header className="flex justify-between items-end">
        <section className="left">
          <div className="flex items-center">
            <h2 className="font-bold text-size-2xl">{data.name}</h2>
          </div>
          <h2 className="text-size-lg">Web 前端工程师</h2>
          <div className="mt-2">
            <span>{data.sex}</span>
            <span className="ml-4">{data.age}岁</span>
            <span className="ml-4">{data.address}</span>
          </div>
          <div>
            {data.graduation_time}年毕业于{data.school}
            {data.college}
          </div>
        </section>
        <section className="right flex flex-col">
          <a href={`tel:${data.phone}`} className="flex items-center gap-2">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-dianhua"></use>
            </svg>
            {data.phone}
          </a>
          <a href={`mailto:${data.email}`} className="flex items-center gap-2">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-email-fill"></use>
            </svg>
            {data.email}
          </a>
          <a href={data.github} className="flex items-center gap-2">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-socialgithub"></use>
            </svg>
            {data.github}
          </a>
          <a href={data.blog} className="flex items-center gap-2">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blog"></use>
            </svg>
            {data.blog}
          </a>
        </section>
      </header>
      <section className="content mt-12">
        <section className="mt-4">
          <h2 className="font-bold text-size-lg">技术栈</h2>
          <ul className="list-disc-inside skills mt-2">
            {data.skill.map(t => (
              <li> {t}</li>
            ))}
          </ul>
        </section>
        <section className="mt-4">
          <h2 className="font-bold text-size-lg">工作经历</h2>
          {data.experience.map((item, index) => (
            <div key={index} className="mt-4 experience">
              <div className="flex items-center">
                <h3 className="font-bold text-size-md">{item.company}</h3>
                <div className="ml-4 flex gap-2 text-size-[12px]">
                  {(item.extra || []).map((e, i) => (
                    <div
                      className="border-amber text-amber px-2 py-[1px] border-1 rounded-md"
                      key={i}
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div className="ml-auto">
                  {item.startTime} - {item.endTime || "至今"}
                </div>
              </div>
              <div className="mt-2">{item.desc}</div>
              {item.content && (
                <ul className="mt-2 list-disc-inside">
                  {item.content.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </section>
    </div>
  )
}

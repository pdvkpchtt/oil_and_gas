import Card from "../../ui/Card";
import { useState } from "react";

const data = [
  {
    id: 8,
    fullText:
      "Каждый вновь вводимый промышленный объект ещё на этапе строительства комплектуется эксплуатационной документацией:\n- Паспортами на технологические трубопроводы;\n- Паспортами на энергетические трубопроводы;\n- Эксплуатационными паспортами на предохранительные клапана;\n- Ведомостью установочных давлений предохранительных клапанов и графиком их ревизии;\n- Перечень трубопроводов и график их ревизии;\n- Карты коррозии на оборудование и трубопроводы.\n\nЭто далеко не полный документов, которые необходимы на предприятии, наша Команда может как разработать, так и оказать консультации с разработкой подробных инструкций в случае, если данные работы передаются подрядчику.",
    label: "Разработка эксплуатационной документации.",
  },
  {
    id: 1,
    fullText:
      "Техническое обслуживание и ремонт технологического оборудования, сооружений на промышленных предприятиях являются ключевыми факторами, влияющими на финансовые результаты и эффективность работы. Корректное планирование и организация этих процессов помогают снизить затраты, увеличить срок службы оборудования и минимизировать простои.\nОсновные задачи разработки регламента:\n\n Разработка регламента ориентирована на:\n- определение перечня оборудования, сооружений;\n- структуры ремонтного цикла;\n- регламента проведения ремонтов;\n- объема выполняемых работ;\n- понимание численности необходимого ремонтного персонала;\n- ориентировочной стоимости ремонта с раскладкой по годам;\n- перечня необходимых материалов.\n\nДанная информация необходима как на этапе разработки ТЭО при обосновании финансовой модели проекта, так формировании бюджета предприятия на каждый год эксплуатации.\n\nРазработка регламента технического обслуживания и ремонта технологического оборудования представляет собой комплексный процесс, требующий тесного сотрудничества различных специалистов. Наша команда имеет значительный опыт в эксплуатации промышленных объектов и в подготовке к текущим и капитальным ремонтам, что позволяет эффективно организовать процесс и минимизировать затраты. Обеспечение правильного подхода к техническому обслуживанию и ремонту сможет существенно увеличить эффективность работы вашего предприятия, повысить его конкурентоспособность и финансовую устойчивость.",
    label:
      "Разработка регламента технического обслуживания и ремонта технологического оборудования.",
  },
  {
    id: 2,
    fullText:
      'В процессе строительства промышленных объектов Заказчик должен быть убежден в том, что каждое технологическое оборудование смонтировано правильно, в соответствии с проектными требованиями и указаниями производителя. Однако разработка исполнительной документации зачастую осуществляется монтажными организациями, и не всегда отражает реальное состояние на строительной площадке.\n\nНаша команда предлагает услуги по разработке чек-листов для всех этапов монтажа, динамического и статического оборудования, что позволит систематизировать и упростить контроль за выполнением работ. Мы предлагаем следующие этапы:\n- подготовка к монтажу;\n- проверка после монтажа;\n- проверка монтажа внутренних устройств;\n- проверка оборудования к закрытию;\n- окончательное закрытие оборудования.\n\nКаждый этап может быть детализирован в чек-листах с указанием нормируемых значений, что сделает процесс контроля более прозрачным. Контроль будет осуществляться по следующему принципу: специалист монтирующей организации проверяет выполненные работы по чек-листу и сдает их специалистам Заказчика и специалисту строительного контроля или привлеченной третьей независимой стороне.\n\nТакой подход позволяет значительно повысить качество монтажа оборудования, устранить "белые пятна" в нормативной документации, сохранить историю выполнения работ, а также повысить ответственность и компетенции всех участников процесса. В результате Заказчик получит уверенность в том, что проект реализован в соответствии со всеми установленными стандартами и требованиями.',
    label: "Чек – листы.",
  },
  {
    id: 3,
    fullText:
      "Качественная сборка фланцевых соединений трубопроводов и оборудования требует от исполнителя работ и инспектора, принимающего работы не только определенных знаний и навыков, но и точно рассчитанного крутящего момента основанного на характеристиках крепёжных деталей, прокладок и самих фланцев. Точно выполненный расчет и знания помогут избежать проблем на этапах пуска. \nНаши специалисты имеют большой опыт выполнения расчета крутящих моментов, но и разработают процедуру, которая повысит качество сборки фланцевых соединений. Это поможет избежать «досадных пропусков» на этапах комплексного опробования и пусков установок, когда для устранения даже одной незначительной утечки требуется остановка.\nРазработка и внедрение процедуры контроля затяжки позволяет обеспечить высокое качество сборки соединений.",
    label:
      "Выполнение расчетов для контролируемой затяжки фланцевых соединений.",
  },
  {
    id: 4,
    fullText:
      "В ходе строительства Заказчики, Подрядчики сталкиваются с необходимостью выполнения узкоспециализированных работ, например таких как:\n- Организация ревизии и ремонта запорной арматуры;\n- Организация ревизии и ремонта предохранительных клапанов;\n- Организация дефектовки и последующего ремонта уплотнительной поверхности фланцев;\n- Организация работ по объемной термообработке крупногабаритного оборудования;\n- Организация работ по первичному техническому освидетельствованию сосудов, работающих под давлением;\n- Организация работ по обезжириванию технологических систем;\n- Разработка технических заданий на выполнение любых работ на строительной площадке;\n- Разработка процедур пневматических испытаний с выполнением расчета опасных зон;\n- Разработка концептов по консервации оборудования.",
    label: "Разработка концептов и процедур.",
  },
  {
    id: 5,
    fullText:
      "Реализация любого проекта начинается с технического задания будь, то задание на разработку базового проекта (Bad, Feed) или задание на разработку проектной и рабочей документации. Техническое задание (ТЗ) — это ключевой документ, который задает основу для успешной реализации проекта. Оно помогает четко определить цели, требования и ожидания, что минимизирует риски и ошибки в дальнейшем. \n\nТак же в настоящее время во всем мире набирает популярность строительства производств из модулей. В контексте модульного строительства, правильное составление ТЗ становится особенно важным. Модульные конструкции требуют точного понимания технических и функциональных характеристик каждой единицы, а также интеграции этих модулей в общую систему. Наши специалисты, обладающие опытом в разработке технических заданий, могут учесть нюансы, связанные с проектированием, производством, транспортировкой и монтажом модулей.\n\nГрамотное составление технического задания не только упрощает процесс проектирования и строительства, но и способствует минимизации рисков, повышению эффективности и качества конечного продукта. ",
    label: "Разработка технических заданий и технических требований.",
  },
  {
    id: 6,
    fullText:
      "Одним из самых ответственных этапов реализации проекта является заказ технологического оборудования. Специалистами нашей Компании успешно внедрен и применяется метод сбора технических предложений по ITP и заказ оборудования по TPO. Данные методы позволяют предъявить полный перечень требований ко всем участникам, упростить рассмотрение поступивших предложений, повысить ответственность потенциальных поставщиков за предоставленное предложение, упростить разработку технической части контракта на поставку оборудования.\n\nНаши специалисты разработают как запросы на техническое предложение (ITP), так и техническую часть контракта на поставку (TPO), где будут предусмотрены требования являющиеся ключевыми на всех этапах жизненного цикла оборудования, выстроенные в общую систему.\n\nТак же мы предоставляем услуги по проверке технических предложений, услуги по проверке рабоче-конструкторской документации (РКД)",
    label: "Разработка ЗТП, проверка РКД.",
  },
];

const Products = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-col w-full">
      {/* top image block */}
      <div className="relative">
        <p className="text-white text-[70px] font-extrabold absolute z-[3] whitespace-pre-line leading-[72px] custom-shadow left-[50px] top-[100px] tracking-[-3%]">
          {`УСЛУГИ`}
        </p>
        <img
          src="/2.jpg"
          className="absolute w-[298px] h-[335px] object-cover z-[1]"
          alt="bg"
        />
        <div className="absolute top-0 left-0 w-[298px] h-[335px] bg-[rgba(0,0,0,.2)] z-[2]" />
      </div>

      {/* bg factory */}
      <div className="absolute left-0 w-full h-[258px] overflow-hidden">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover absolute z-[-1]"
          alt="bg"
        />
      </div>
      {/* bg factory */}

      <div className="mt-[calc(335px+75px)] flex flex-row gap-[70px] justify-center flex-wrap">
        {data.map((i, key) => (
          <Card
            fullText={i.fullText}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            text={i.label}
            key={key}
            id={i.id}
            onClick={() => setSelectedId(i.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

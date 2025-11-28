import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const subjects = [
  'Математика',
  'Русский язык',
  'Литература',
  'Английский язык',
  'История',
  'Обществознание',
  'Биология',
  'Химия',
  'Физика',
  'География',
  'Информатика',
  'Искусство',
  'Музыка',
  'Физкультура',
];

const tutors = [
  {
    id: 1,
    name: 'Анна Петрова',
    subject: 'Математика',
    experience: 8,
    price: 1500,
    rating: 4.9,
    description: 'Готовлю к ОГЭ и ЕГЭ, работаю с детьми на семейном обучении',
  },
  {
    id: 2,
    name: 'Игорь Смирнов',
    subject: 'Физика',
    experience: 12,
    price: 2000,
    rating: 5.0,
    description: 'Кандидат физико-математических наук, индивидуальный подход',
  },
  {
    id: 3,
    name: 'Мария Иванова',
    subject: 'Английский язык',
    experience: 6,
    price: 1200,
    rating: 4.8,
    description: 'Сертифицированный преподаватель, опыт работы за рубежом',
  },
  {
    id: 4,
    name: 'Олег Васильев',
    subject: 'Русский язык',
    experience: 10,
    price: 1800,
    rating: 4.9,
    description: 'Специализация: подготовка к итоговому сочинению и ЕГЭ',
  },
  {
    id: 5,
    name: 'Екатерина Новикова',
    subject: 'Биология',
    experience: 5,
    price: 1300,
    rating: 4.7,
    description: 'Выпускница МГУ, современные методики преподавания',
  },
  {
    id: 6,
    name: 'Дмитрий Кузнецов',
    subject: 'Химия',
    experience: 15,
    price: 2200,
    rating: 5.0,
    description: 'Профессор, автор учебных пособий, подготовка к олимпиадам',
  },
];

const platforms = [
  {
    name: 'Онлайн-школа №1',
    description: 'Аттестация с 1 по 11 класс, поддержка куратора',
    features: ['Гибкий график', 'Онлайн-тесты', 'Личный куратор'],
    price: 'от 15 000 ₽/год',
  },
  {
    name: 'Семейная академия',
    description: 'Комплексная программа для семейного образования',
    features: ['Все предметы', 'Консультации педагогов', 'Сертификат'],
    price: 'от 25 000 ₽/год',
  },
  {
    name: 'Аттестация.ру',
    description: 'Промежуточная и итоговая аттестация дистанционно',
    features: ['Быстрая проверка', 'Видеоконсультации', 'Документы онлайн'],
    price: 'от 8 000 ₽/предмет',
  },
];

const articles = [
  {
    title: 'Как составить индивидуальный учебный план',
    author: 'Психолог Елена Смирнова',
    category: 'Методика',
    date: '15 ноября 2024',
    excerpt: 'Основные принципы составления гибкого учебного плана с учетом интересов и особенностей ребенка.',
  },
  {
    title: 'Социализация при семейном обучении',
    author: 'Педагог Михаил Королев',
    category: 'Психология',
    date: '10 ноября 2024',
    excerpt: 'Как обеспечить полноценное общение и развитие социальных навыков ребенка вне школы.',
  },
  {
    title: 'Мотивация и самостоятельность: баланс',
    author: 'Психолог Анна Белова',
    category: 'Воспитание',
    date: '5 ноября 2024',
    excerpt: 'Советы родителям о том, как поддерживать интерес к учебе и развивать ответственность.',
  },
  {
    title: 'Организация рабочего пространства дома',
    author: 'Педагог Ольга Федорова',
    category: 'Организация',
    date: '1 ноября 2024',
    excerpt: 'Практические рекомендации по созданию комфортной и продуктивной учебной среды.',
  },
];

const library = [
  {
    id: 1,
    title: 'Математика. 5 класс. Учебник ФГОС',
    author: 'Мерзляк А.Г., Полонский В.Б.',
    subject: 'Математика',
    type: 'Учебник',
    grade: '5 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 304,
    format: 'PDF',
  },
  {
    id: 2,
    title: 'Математика. Углубленное изучение. 7 класс',
    author: 'Виленкин Н.Я., Жохов В.И.',
    subject: 'Математика',
    type: 'Учебник',
    grade: '7 класс',
    specialization: 'Углубленный уровень',
    year: 2023,
    pages: 368,
    format: 'PDF',
  },
  {
    id: 3,
    title: 'Дидактические материалы по математике. 6 класс',
    author: 'Чесноков А.С., Нешков К.И.',
    subject: 'Математика',
    type: 'Дидактические материалы',
    grade: '6 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 160,
    format: 'PDF',
  },
  {
    id: 4,
    title: 'Русский язык. 5 класс. Учебник ФГОС',
    author: 'Ладыженская Т.А., Баранов М.Т.',
    subject: 'Русский язык',
    type: 'Учебник',
    grade: '5 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 320,
    format: 'PDF',
  },
  {
    id: 5,
    title: 'Методическое пособие к учебнику «Русский язык. 6 класс»',
    author: 'Разумовская М.М.',
    subject: 'Русский язык',
    type: 'Методическое пособие',
    grade: '6 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 224,
    format: 'PDF',
  },
  {
    id: 6,
    title: 'Физика. 7 класс. Учебник ФГОС',
    author: 'Перышкин А.В.',
    subject: 'Физика',
    type: 'Учебник',
    grade: '7 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 224,
    format: 'PDF',
  },
  {
    id: 7,
    title: 'Физика. Углубленный уровень. 8 класс',
    author: 'Генденштейн Л.Э., Кирик Л.А.',
    subject: 'Физика',
    type: 'Учебник',
    grade: '8 класс',
    specialization: 'Углубленный уровень',
    year: 2023,
    pages: 272,
    format: 'PDF',
  },
  {
    id: 8,
    title: 'Сборник задач по физике. 7-9 классы',
    author: 'Лукашик В.И., Иванова Е.В.',
    subject: 'Физика',
    type: 'Дидактические материалы',
    grade: '7-9 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 240,
    format: 'PDF',
  },
  {
    id: 9,
    title: 'Английский язык. 5 класс. Учебник ФГОС',
    author: 'Ваулина Ю.Е., Дули Д.',
    subject: 'Английский язык',
    type: 'Учебник',
    grade: '5 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 164,
    format: 'PDF',
  },
  {
    id: 10,
    title: 'Грамматика английского языка. Сборник упражнений',
    author: 'Барашкова Е.А.',
    subject: 'Английский язык',
    type: 'Дидактические материалы',
    grade: '5-6 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 192,
    format: 'PDF',
  },
  {
    id: 11,
    title: 'Биология. 7 класс. Учебник ФГОС',
    author: 'Пасечник В.В., Суматохин С.В.',
    subject: 'Биология',
    type: 'Учебник',
    grade: '7 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 256,
    format: 'PDF',
  },
  {
    id: 12,
    title: 'Биология. Практические работы. 8 класс',
    author: 'Колесов Д.В., Маш Р.Д.',
    subject: 'Биология',
    type: 'Методическое пособие',
    grade: '8 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 128,
    format: 'PDF',
  },
  {
    id: 13,
    title: 'Химия. 8 класс. Учебник ФГОС',
    author: 'Габриелян О.С.',
    subject: 'Химия',
    type: 'Учебник',
    grade: '8 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 288,
    format: 'PDF',
  },
  {
    id: 14,
    title: 'Химия. Задачник с помощником. 8-9 классы',
    author: 'Гара Н.Н., Габрусева Н.И.',
    subject: 'Химия',
    type: 'Дидактические материалы',
    grade: '8-9 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 176,
    format: 'PDF',
  },
  {
    id: 15,
    title: 'История России. 6 класс. Учебник ФГОС',
    author: 'Арсентьев Н.М., Данилов А.А.',
    subject: 'История',
    type: 'Учебник',
    grade: '6 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 288,
    format: 'PDF',
  },
  {
    id: 16,
    title: 'Контурные карты. История России. 7 класс',
    author: 'Тороп В.В.',
    subject: 'История',
    type: 'Дидактические материалы',
    grade: '7 класс',
    specialization: 'Базовый уровень',
    year: 2023,
    pages: 32,
    format: 'PDF',
  },
];

export default function Index() {
  const [selectedSubjects, setSelectedSubjects] = useState<{ subject: string; hours: number }[]>([]);
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterExperience, setFilterExperience] = useState<number[]>([0]);
  const [filterPrice, setFilterPrice] = useState<number[]>([3000]);
  const [libraryFilterSubject, setLibraryFilterSubject] = useState<string>('all');
  const [libraryFilterType, setLibraryFilterType] = useState<string>('all');
  const [libraryFilterSpecialization, setLibraryFilterSpecialization] = useState<string>('all');
  const [librarySearchQuery, setLibrarySearchQuery] = useState<string>('');

  const addSubject = (subject: string) => {
    if (!selectedSubjects.find((s) => s.subject === subject)) {
      setSelectedSubjects([...selectedSubjects, { subject, hours: 1 }]);
    }
  };

  const removeSubject = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter((s) => s.subject !== subject));
  };

  const updateHours = (subject: string, hours: number) => {
    setSelectedSubjects(
      selectedSubjects.map((s) => (s.subject === subject ? { ...s, hours } : s))
    );
  };

  const filteredTutors = tutors.filter((tutor) => {
    const subjectMatch = filterSubject === 'all' || tutor.subject === filterSubject;
    const experienceMatch = tutor.experience >= filterExperience[0];
    const priceMatch = tutor.price <= filterPrice[0];
    return subjectMatch && experienceMatch && priceMatch;
  });

  const filteredLibrary = library.filter((book) => {
    const subjectMatch = libraryFilterSubject === 'all' || book.subject === libraryFilterSubject;
    const typeMatch = libraryFilterType === 'all' || book.type === libraryFilterType;
    const specializationMatch = libraryFilterSpecialization === 'all' || book.specialization === libraryFilterSpecialization;
    const searchMatch = librarySearchQuery === '' || 
      book.title.toLowerCase().includes(librarySearchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(librarySearchQuery.toLowerCase());
    return subjectMatch && typeMatch && specializationMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <h1 className="text-2xl font-heading font-bold text-foreground">Семейное образование</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#constructor" className="text-foreground hover:text-primary transition-colors">
              Конструктор
            </a>
            <a href="#library" className="text-foreground hover:text-primary transition-colors">
              Библиотека
            </a>
            <a href="#tutors" className="text-foreground hover:text-primary transition-colors">
              Репетиторы
            </a>
            <a href="#platforms" className="text-foreground hover:text-primary transition-colors">
              Аттестация
            </a>
            <a href="#articles" className="text-foreground hover:text-primary transition-colors">
              Статьи
            </a>
          </nav>
          <Button size="lg" className="hidden md:flex">
            <Icon name="User" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Создайте идеальный план обучения
            <br />
            для вашего ребенка
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Платформа для родителей, которые выбрали семейное образование. Составьте индивидуальный
            учебный план, найдите проверенных репетиторов и получите поддержку специалистов.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="constructor" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Icon name="Palette" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Конструктор учебного плана
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите предметы и укажите количество часов в неделю для создания индивидуального
              расписания
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading">Выберите предметы</CardTitle>
                <CardDescription>Добавьте предметы, которые будет изучать ваш ребенок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Button
                      key={subject}
                      variant={
                        selectedSubjects.find((s) => s.subject === subject)
                          ? 'default'
                          : 'outline'
                      }
                      onClick={() => {
                        if (selectedSubjects.find((s) => s.subject === subject)) {
                          removeSubject(subject);
                        } else {
                          addSubject(subject);
                        }
                      }}
                      className="transition-all"
                    >
                      {subject}
                    </Button>
                  ))}
                </div>

                {selectedSubjects.length > 0 && (
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-heading font-semibold text-lg">Часов в неделю</h3>
                    {selectedSubjects.map((item) => (
                      <div key={item.subject} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label className="text-base">{item.subject}</Label>
                          <Badge variant="secondary" className="text-base px-3 py-1">
                            {item.hours} {item.hours === 1 ? 'час' : item.hours < 5 ? 'часа' : 'часов'}
                          </Badge>
                        </div>
                        <Slider
                          value={[item.hours]}
                          onValueChange={(value) => updateHours(item.subject, value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Всего часов в неделю:</span>
                        <Badge className="text-lg px-4 py-2">
                          {selectedSubjects.reduce((acc, item) => acc + item.hours, 0)}
                        </Badge>
                      </div>
                    </div>
                    <Button size="lg" className="w-full mt-4">
                      <Icon name="Download" size={20} className="mr-2" />
                      Скачать учебный план
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="library" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Icon name="Library" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Библиотека учебных материалов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Учебники ФГОС, методические и дидактические пособия по всем предметам
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card className="mb-8 border-2">
              <CardHeader>
                <CardTitle className="font-heading">Поиск материалов</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Поиск по названию или автору..."
                    value={librarySearchQuery}
                    onChange={(e) => setLibrarySearchQuery(e.target.value)}
                    className="text-base"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Предмет</Label>
                    <Select value={libraryFilterSubject} onValueChange={setLibraryFilterSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Все предметы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все предметы</SelectItem>
                        {Array.from(new Set(library.map((b) => b.subject))).map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Тип материала</Label>
                    <Select value={libraryFilterType} onValueChange={setLibraryFilterType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Все типы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все типы</SelectItem>
                        {Array.from(new Set(library.map((b) => b.type))).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Уровень</Label>
                    <Select value={libraryFilterSpecialization} onValueChange={setLibraryFilterSpecialization}>
                      <SelectTrigger>
                        <SelectValue placeholder="Все уровни" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все уровни</SelectItem>
                        {Array.from(new Set(library.map((b) => b.specialization))).map((spec) => (
                          <SelectItem key={spec} value={spec}>
                            {spec}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {filteredLibrary.length > 0 && (
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      Найдено материалов: <span className="font-semibold">{filteredLibrary.length}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLibrary.map((book) => (
                <Card key={book.id} className="hover:shadow-xl transition-shadow border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary">{book.type}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {book.format}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-lg leading-snug">{book.title}</CardTitle>
                    <CardDescription className="text-sm">{book.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="BookOpen" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{book.subject}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="GraduationCap" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{book.grade}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="FileText" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{book.pages} стр.</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{book.year} г.</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Badge className="w-full justify-center py-1">
                        {book.specialization}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Eye" size={16} className="mr-1" />
                        Просмотр
                      </Button>
                      <Button size="sm" className="w-full">
                        <Icon name="Download" size={16} className="mr-1" />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredLibrary.length === 0 && (
              <Card className="border-2">
                <CardContent className="py-12 text-center">
                  <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-heading font-semibold mb-2">Материалы не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска или фильтры
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section id="tutors" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Поиск репетиторов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Найдите опытных преподавателей для занятий с вашим ребенком
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card className="mb-8 border-2">
              <CardHeader>
                <CardTitle className="font-heading">Фильтры поиска</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Предмет</Label>
                    <Select value={filterSubject} onValueChange={setFilterSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите предмет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все предметы</SelectItem>
                        {Array.from(new Set(tutors.map((t) => t.subject))).map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Опыт работы</Label>
                      <Badge variant="outline">от {filterExperience[0]} лет</Badge>
                    </div>
                    <Slider
                      value={filterExperience}
                      onValueChange={setFilterExperience}
                      max={15}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Стоимость занятия</Label>
                      <Badge variant="outline">до {filterPrice[0]} ₽</Badge>
                    </div>
                    <Slider
                      value={filterPrice}
                      onValueChange={setFilterPrice}
                      max={3000}
                      min={500}
                      step={100}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutors.map((tutor) => (
                <Card key={tutor.id} className="hover:shadow-xl transition-shadow border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="font-heading text-xl">{tutor.name}</CardTitle>
                        <CardDescription className="text-base mt-1">{tutor.subject}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-full">
                        <Icon name="Star" size={16} className="text-amber-600 fill-amber-600" />
                        <span className="text-sm font-semibold text-amber-900">{tutor.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{tutor.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                        <span>{tutor.experience} лет</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-primary">
                        <Icon name="Wallet" size={16} />
                        <span>{tutor.price} ₽/час</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Связаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Платформы для аттестации
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Проверенные онлайн-школы для прохождения аттестации
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{platform.name}</CardTitle>
                  <CardDescription className="text-base">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-primary mb-4">{platform.price}</p>
                    <Button variant="outline" className="w-full">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Статьи психологов и педагогов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы и рекомендации для родителей
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все статьи</TabsTrigger>
              <TabsTrigger value="Методика">Методика</TabsTrigger>
              <TabsTrigger value="Психология">Психология</TabsTrigger>
              <TabsTrigger value="Организация">Организация</TabsTrigger>
            </TabsList>

            {['all', 'Методика', 'Психология', 'Организация'].map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {articles
                  .filter((article) => category === 'all' || article.category === category)
                  .map((article) => (
                    <Card key={article.title} className="border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="font-heading text-xl">{article.title}</CardTitle>
                          <Badge variant="secondary">{article.category}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="User" size={14} />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {article.date}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{article.excerpt}</p>
                        <Button variant="link" className="p-0 h-auto">
                          Читать полностью
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Готовы начать семейное обучение?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к нашей платформе и получите полную поддержку в организации
            образовательного процесса
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Создать план обучения
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent hover:bg-white/10 text-primary-foreground border-primary-foreground/30">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <h3 className="font-heading font-bold text-lg">Семейное образование</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш надежный помощник в организации семейного обучения
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#constructor" className="text-muted-foreground hover:text-primary transition-colors">
                    Конструктор плана
                  </a>
                </li>
                <li>
                  <a href="#library" className="text-muted-foreground hover:text-primary transition-colors">
                    Библиотека
                  </a>
                </li>
                <li>
                  <a href="#tutors" className="text-muted-foreground hover:text-primary transition-colors">
                    Репетиторы
                  </a>
                </li>
                <li>
                  <a href="#platforms" className="text-muted-foreground hover:text-primary transition-colors">
                    Аттестация
                  </a>
                </li>
                <li>
                  <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">
                    Статьи
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Часто задаваемые вопросы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Семейное образование. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
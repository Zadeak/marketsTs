/**
 * Класс Создатель объявляет фабричный метод, который должен возвращать объект
 * класса Продукт. Подклассы Создателя обычно предоставляют реализацию этого
 * метода.
 */
abstract class MarketCreator {
  /**
   * Обратите внимание, что Создатель может также обеспечить реализацию
   * фабричного метода по умолчанию.
   */
  public abstract factoryMethod(): Market;

  /**
   * Также заметьте, что, несмотря на название, основная обязанность Создателя
   * не заключается в создании продуктов. Обычно он содержит некоторую базовую
   * бизнес-логику, которая основана на объектах Продуктов, возвращаемых
   * фабричным методом. Подклассы могут косвенно изменять эту бизнес-логику,
   * переопределяя фабричный метод и возвращая из него другой тип продукта.
   */
  public someOperation(): string {
    // Вызываем фабричный метод, чтобы получить объект-продукт.
    const product = this.factoryMethod();
    // Далее, работаем с этим продуктом.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
  public returnMarket(): Market {
    const market = this.factoryMethod();
    return market;
  }
}

/**
 * Конкретные Создатели переопределяют фабричный метод для того, чтобы изменить
 * тип результирующего продукта.
 */
class MarketCreator_1x2 extends MarketCreator {
  /**
   * Обратите внимание, что сигнатура метода по-прежнему использует тип
   * абстрактного продукта, хотя фактически из метода возвращается конкретный
   * продукт. Таким образом, Создатель может оставаться независимым от
   * конкретных классов продуктов.
   */
  public factoryMethod(): Market {
    return new Market_1X2();
  }
}

class MarketCreator_Total extends MarketCreator {
  public factoryMethod(): Market {
    return new Market_Total();
  }
}

/**
 * Интерфейс Продукта объявляет операции, которые должны выполнять все
 * конкретные продукты.
 */
interface Market {
  info: string;
  operation(): string;
}

/**
 * Конкретные Продукты предоставляют различные реализации интерфейса Продукта.
 */
class Market_1X2 implements Market {
  info = "1x2Market";

  public operation(): string {
    return "{1x2}";
  }
}

class Market_Total implements Market {
  info = "TotalMarket";
  public operation(): string {
    return "{Total}";
  }
}

/**
 * Клиентский код работает с экземпляром конкретного создателя, хотя и через его
 * базовый интерфейс. Пока клиент продолжает работать с создателем через базовый
 * интерфейс, вы можете передать ему любой подкласс создателя.
 */
function clientCode(creator: MarketCreator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * Приложение выбирает тип создателя в зависимости от конфигурации или среды.
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new MarketCreator_1x2());

console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new MarketCreator_Total());

console.log("---------------");
const newMarket = new MarketCreator_1x2().returnMarket();

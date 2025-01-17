use crate::artifacts::ArtifactSetName;
use crate::attribute::{Attribute, AttributeName};
use crate::buffs::{Buff, BuffConfig};
use crate::buffs::buff::BuffMeta;
use crate::buffs::buff_meta::{BuffFrom, BuffGenre, BuffImage, BuffMetaData};
use crate::buffs::buff_name::BuffName;
use crate::common::Element;
use crate::common::item_config_type::{ItemConfig, ItemConfigType};
use crate::enemies::Enemy;

pub struct BuffArchaicPetra4 {
    pub element: Element
}

impl<A: Attribute> Buff<A> for BuffArchaicPetra4 {
    fn change_attribute(&self, attribute: &mut A) {
        let name = AttributeName::bonus_name_by_element(self.element);
        attribute.set_value_by(name, "BUFF: 悠古的磐岩4", 0.35);
    }
}

impl BuffMeta for BuffArchaicPetra4 {
    #[cfg(not(target_family = "wasm"))]
    const META_DATA: BuffMetaData = BuffMetaData {
        name: BuffName::ArchaicPetra4,
        chs: "悠古的磐岩4",
        image: BuffImage::Artifact(ArtifactSetName::ArchaicPetra),
        genre: BuffGenre::Artifact,
        description: Some("获得结晶反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。"),
        from: BuffFrom::Artifact(ArtifactSetName::ArchaicPetra),
    };

    #[cfg(not(target_family = "wasm"))]
    const CONFIG: Option<&'static [ItemConfig]> = Some(&[
        ItemConfig {
            name: "element",
            title: "结晶元素",
            config: ItemConfigType::Element4 { default: Element::Electro }
        }
    ]);

    fn create<A: Attribute>(b: &BuffConfig) -> Box<dyn Buff<A>> {
        let element = match *b {
            BuffConfig::ArchaicPetra4 { element } => element,
            _ => Element::Electro
        };

        Box::new(BuffArchaicPetra4 {
            element
        })
    }
}

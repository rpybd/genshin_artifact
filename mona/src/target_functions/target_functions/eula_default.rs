use crate::artifacts::{Artifact, ArtifactSetName};
use crate::artifacts::effect_config::{ArtifactEffectConfig, ConfigPaleFlame};
use crate::attribute::{Attribute, SimpleAttributeGraph2};
use crate::character::Character;
use crate::character::characters::Eula;
use crate::character::skill_config::CharacterSkillConfig;
use crate::character::traits::CharacterTrait;
use crate::common::StatName;
use crate::damage::{DamageContext, SimpleDamageBuilder};
use crate::enemies::Enemy;
use crate::target_functions::target_function_opt_config::TargetFunctionOptConfig;
use crate::target_functions::TargetFunction;
use crate::team::TeamQuantization;
use crate::weapon::Weapon;

pub struct EulaDefaultTargetFunction {
    pub is_c2: bool
}

impl EulaDefaultTargetFunction {
    pub fn new<A: Attribute>(character: &Character<A>) -> Self {
        Self {
            is_c2: character.common_data.constellation >= 2
        }
    }
}

impl TargetFunction for EulaDefaultTargetFunction {
    fn get_target_function_opt_config(&self) -> TargetFunctionOptConfig {
        TargetFunctionOptConfig {
            atk_fixed: 0.1,
            atk_percentage: 1.0,
            hp_fixed: 0.0,
            hp_percentage: 0.0,
            def_fixed: 0.0,
            def_percentage: 0.0,
            recharge: 0.2,
            elemental_mastery: 0.0,
            critical: 1.0,
            critical_damage: 1.0,
            bonus_electro: 0.0,
            bonus_pyro: 0.0,
            bonus_hydro: 0.0,
            bonus_anemo: 0.0,
            bonus_cryo: 0.0,
            bonus_geo: 0.0,
            bonus_dendro: 0.0,
            bonus_physical: 2.0,
            sand_main_stats: vec![
                StatName::ATKPercentage,
            ],
            goblet_main_stats: vec![
                StatName::PhysicalBonus,
                StatName::ATKPercentage,
            ],
            head_main_stats: vec![
                StatName::CriticalRate,
                StatName::CriticalDamage,
                StatName::ATKPercentage,
            ],
            set_names: Some(vec![
                ArtifactSetName::PaleFlame,
                ArtifactSetName::BloodstainedChivalry,
                ArtifactSetName::ShimenawasReminiscence,
                ArtifactSetName::GladiatorsFinale,
            ]),
        }
    }

    fn get_default_artifact_config(&self, _team_config: &TeamQuantization) -> ArtifactEffectConfig {
        ArtifactEffectConfig {
            config_archaic_petra: Default::default(),
            config_berserker: Default::default(),
            config_blizzard_strayer: Default::default(),
            config_bloodstained_chivalry: Default::default(),
            config_brave_heart: Default::default(),
            config_crimson_witch_of_flames: Default::default(),
            config_heart_of_depth: Default::default(),
            config_husk_of_opulent_dreams: Default::default(),
            config_instructor: Default::default(),
            config_lavawalker: Default::default(),
            config_martial_artist: Default::default(),
            config_noblesse_oblige: Default::default(),
            config_pale_flame: if self.is_c2 {
                const CD: f64 = 5.0;
                ConfigPaleFlame {
                    avg_level: 7.0 / CD,
                    full_rate: (7.0 - CD) / CD
                }
            } else {
                const CD: f64 = 11.0;
                ConfigPaleFlame {
                    avg_level: 7.0 / CD,
                    full_rate: 0.0
                }
            },
            config_retracing_bolide: Default::default(),
            config_shimenawas_reminiscence: Default::default(),
            config_tenacity_of_the_millelith: Default::default(),
            config_thundersoother: Default::default()
        }
    }

    fn target(&self, attribute: &SimpleAttributeGraph2, character: &Character<SimpleAttributeGraph2>, _weapon: &Weapon<SimpleAttributeGraph2>, _artifacts: &Vec<&Artifact>, enemy: &Enemy) -> f64 {
        let context: DamageContext<'_, SimpleAttributeGraph2> = DamageContext {
            character_common_data: &character.common_data,
            attribute, enemy
        };

        let skill_config = if character.common_data.constellation < 6 {
            CharacterSkillConfig::Eula { lightfall_stack: 10 }
        } else {
            CharacterSkillConfig::Eula { lightfall_stack: 20 }
        };

        type S = <Eula as CharacterTrait>::DamageEnumType;
        let dmg_q = Eula::damage::<SimpleDamageBuilder>(
            &context, S::QLightfall, &skill_config
        ).normal.expectation;
        let dmg_a = Eula::damage::<SimpleDamageBuilder>(
            &context, S::Normal1, &skill_config
        ).normal.expectation;

        dmg_q + dmg_a * 25.0
    }
}